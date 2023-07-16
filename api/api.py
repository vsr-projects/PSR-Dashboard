from flask import Flask, jsonify, request
import boto3
import requests
import traceback
import os
from bs4 import BeautifulSoup
import sys
from datetime import datetime, timedelta
import xml.etree.cElementTree as ET
import pandas as pd
import csv
from flask_cors import CORS
from collections import defaultdict

app=Flask(__name__)

CORS(app, resources={r"/*": {"origins": "*"}})
duration=0
top_error=[]
top_avg=[]
top_max=[]
stats=[]

class Dash():
    def _init_(self, username, password,
                 idp_url='https://adfs.zsassociates.com:443/adfs/ls/idpinitiatedsignon.aspx?LoginToRP=urn:amazon:webservices',
                 sslverification=True):
        self._username = username
        self._password = password
        self._idp_url = idp_url
        self._sslverification = sslverification
        self._session=None

    def create_session(self, role_name, account_Id):
        try:

            # Initiate session handler
            session = requests.Session()

            payload = {}
            payload['UserName'] = self._username
            payload['Password'] = self._password

            response = session.post(self._idp_url, data=payload, verify=self._sslverification)

            # Debug the response if needed
            print ('reponse', response.text)

            # Decode the response and extract the SAML assertion
            soup = BeautifulSoup(response.text, 'html.parser')
            assertion = ''
            print('assssss', assertion)
            # Look for the SAMLResponse attribute of the input tag (determined by
            # analyzing the debug print lines above)
            for inputtag in soup.find_all('input'):
                print((inputtag))
                if (inputtag.get('name') == 'SAMLResponse'):
                    assertion = inputtag.get('value')
                    print("Assertion is ------------------------->",assertion)

            role_arn = 'arn:aws:iam::' + account_Id + ':role/' + role_name
            principal_arn = 'arn:aws:iam::' + account_Id + ':saml-provider/adfs'

            # Use the assertion to get an AWS STS token using Assume Role with SAML
            client = boto3.client('sts')
            print('sts------------')
            response = client.assume_role_with_saml(RoleArn=role_arn, PrincipalArn=principal_arn,
                                                    SAMLAssertion=assertion)
            credentials = response['Credentials']


            # Use the credentials to create a session
            access_key = credentials['AccessKeyId']
            secret_key = credentials['SecretAccessKey']
            session_token = credentials['SessionToken']
            print('accesskey', access_key)
            print('secretkey', secret_key)
            print('session', session_token)
            session = boto3.Session(access_key, secret_key, session_token)
            self._session=session
            return session
        except:
            print("Authentication failed: " + str(traceback.format_exc()))
    
    def PSRCost(self,start,end,granuarilty):
        client = self._session.client('ce')
        response = client.get_cost_and_usage(
            TimePeriod={
                'Start': start,
                'End': end
            },
            Granularity=granuarilty,
        Metrics=[
                'UnblendedCost',
            ],
        )
        cost=response["ResultsByTime"][0]["Total"]["UnblendedCost"]
        return jsonify(cost)
    
    def ResourceCost(self,start,end,granuarilty):
        client = self._session.client('ce')
        response = client.get_cost_and_usage_with_resources(
        TimePeriod={
        'Start': start,
        'End': end
        },
        #Dimension='SERVICE',
        Granularity=granuarilty,
        Filter={
        'Dimensions': {
        'Key': 'RESOURCE_ID',
        'Values': [
        '',
        ]
        }
        },
        Metrics=[
        'UnblendedCost',
        ],
        GroupBy=[
        {
        'Type': 'DIMENSION',
        'Key': 'SERVICE'
        },
        ],
        )
        ResponseResultsByTime=response['ResultsByTime']
        #print(ResponseResultsByTime)
        start_time,end_time=ResponseResultsByTime[0]['TimePeriod']['Start'],ResponseResultsByTime[0]['TimePeriod']['End']
        print("Start time is: ",start_time,"End time is: ",end_time)
        resources={}
        for i in ResponseResultsByTime[0]['Groups']:
            resources[i['Keys'][0]]=i['Metrics']['UnblendedCost']["Amount"]
            #print(i['Keys'])
            #print(i['Metrics']['UnblendedCost']["Amount"])
        return(resources)
    
    def Rds(self,start,end,granuarilty,instance,identifier):
        AWS_REGION = "us-east-1"
        cw = self._session.client('cloudwatch',region_name=AWS_REGION)
        response = cw.get_metric_data(
            MetricDataQueries=[
                {
                    'Id': 'cpu_1',
                    'MetricStat': {
                    'Metric': {
                        'Namespace': 'AWS/RDS',
                        'MetricName': 'CPUUtilization',
                        'Dimensions': [
                                {
                                    "Name": identifier,
                                    "Value": instance 
                                }]
                    },
                    'Period': 120,
                    'Stat': 'Maximum',
                    }
                },
            ],
        StartTime=start,
            EndTime=end,
        )
        return response

'''Start='2023-01-17'
End='2023-01-18'

response=get_cost_and_usage_with_resources_PSR(Start,End)
print(response)'''
        

"""Start='2023-01-17'
End= '2023-01-18'
cost=get_cost_and_usage_PSR(Start,End)
print(cost,"is from start:",Start," Till :",End)'"""

mainObj=None

@app.route('/projects/releases', methods=['GET'])
def getReleases():
    import os
    files = os.listdir("/path/to/xml/files")  # replace with your actual path
    releases = [f[:-4] for f in files if f.endswith(".xml")]
    return jsonify(releases)

@app.route('/createSession/<string:username>/<string:Pas>', methods=['Get'])
def sahil(username,Pas):
    global mainObj
    mainObj= Dash(username,Pas)
    session=mainObj.create_session('aws-a0000-glbl-00-r-rol-shrd-psr-pwr01', '654797948623')
    #print("session ____________",Sess)
    return str(session)

@app.route('/createSession/costs', methods=['Get'])
def cost():
    ans=mainObj.PSRCost('2023-01-17','2023-01-18','DAILY')
    return ans


@app.route('/createSession/RDS/<instance>&<identifier>&<start>&<end>', methods=['Get'])
def RdsCost(start,end,instance,identifier):
    ans=mainObj.RDS(start,end,instance,identifier)
    #computaion code in teamcity
    return cost
@app.route('/createSession/ResourceCosts', methods=['Get'])
def resourceCost():
    StartTime=datetime.now() - timedelta(days=1),
    EndTime=datetime.now(),
    ans=mainObj.get_cost_and_usage_with_resources_PSR(StartTime,EndTime,'Daily')
    return ans

@app.route('/projects/lists', methods=['Get'])
def getPojects():
    path=r"C:\Users\vs38731\Documents\GitHub\PSR-Dashboard\api"
    entities = os.listdir(path)
    print("paths are --------------------",entities)
    return jsonify(entities)


@app.route('/projects/<string:project>', methods=['Get'])
def getModule(project):
    path=r"C:\Users\vs38731\Documents\GitHub\PSR-Dashboard\api"
    module=path+"/"+project
    entities = os.listdir(module)
    print("modules are------------",entities)
    return jsonify(entities)

@app.route('/projects/stats/<string:filename>', methods=['Get'])
def getStats(filename):
    tree = ET.ElementTree(file=f"./{filename}.xml")
    root = tree.getroot()
    getTransection(root)
    df=pd.DataFrame.from_dict(Transection,orient='index')
    print(df)
    df.sort_values(by=['percentile1'])
    max_transection=df[0:5:1]
    max_transection = max_transection.to_dict('dict')
    print(max_transection)
    getHostpot(root)
    print(top_error)
    print(duration)
    print(stats)
    Allstats=[]
    Allstats.append({"Top_Error":top_error})
    Allstats.append({"Top_Avg":top_avg})
    Allstats.append({"Top_Max":top_max})
    Allstats.append({'Max_Transection':max_transection})
    Allstats.append({"Duration":duration})
    
    Allstats.append({"stats":stats})

    return jsonify(Allstats)

def getHostpot(root):
    if root.tag=='hotspots':
        print(root)
        for i in root:
            if i.tag=='toperrors':
                for k in i:
                    #k.attrib
                    top_error.append(k.attrib)
            if i.tag=='topavg':
                for k in i:
                    #k.attrib
                    top_avg.append(k.attrib)
            if i.tag=='topmax':
                for k in i:
                    #k.attrib
                    top_max.append(k.attrib)
    if root.tag=='test':
        global duration
        duration=root.attrib['duration']
    if root.tag=='statistics':
        for k in root:
                    #k.attrib
                stats.append(k.attrib)
    else:
        for i in root:
            getHostpot(i)

#getHostpot(root)
    #print(top_error,top_avg,top_max)
    #print(duration)
    #print(stats)





Transection={}
def getTransection(root):
    global count
    if root.tag=='statistic-item':
        #print(root)
        for i in root:
            if i.tag=='statistic-item' and ('parentName' in i.attrib) and i.attrib['parentName']=='Actions':
                #print(i.attrib)
                if i.attrib['name'] in Transection:
                    p1=Transection[i.attrib['name']]['percentile1']
                    p2=i.attrib['percentile1']
                    if p2>p1:
                        Transection[i.attrib['name']]=i.attrib
                    #count+=1
                else:
                    Transection[i.attrib['name']]=i.attrib
            getTransection(i)
    else:
        for i in root:
            getTransection(i)







def getDic(f):
    with open(f, mode='r') as csv_file:
        reader = csv.DictReader(csv_file)
        data = {}
        for row in reader:
            userpath = row.pop('user_path')
            #print(row.keys())
            Transection=row.pop('ï»¿Transaction')
            #print(Transection)
            #Trans[Transection]=row
            #print(Trans)
            if userpath.lower() in data:
                data[userpath.lower()][Transection.lower()]=row
            else:
                data[userpath.lower()]={}
            #data1[userpath]=Trans

    return data
@app.route('/projects/compare/<string:f1>&<string:f2>', methods=['Get'])
def compare(f1,f2):
    path='./'
    file1 = path+f1+'.csv'
    #file2='my_file.csv'
    #Trans={}
    
    file2 = path+f2+'.csv'
    #file2='my_file.csv'
    #Trans={}
    data1=getDic(file1)
    #print("data1:-------------",data1)
    data2=getDic(file2)
    #print(data2)
    data3=["Transection","average fot file 1","average2 for file 2","p1","p2"]
    userpath_dis={}
    for i in data1:
        userpath=i
        print(i)
        if userpath not in userpath_dis:
            userpath_dis[userpath]=[]
        #print(i)
        if i in data2:
            #print(i)
            for j in data1[i]:
                #print("j",j)
                tran1=data1[i][j]
                #print(data2)
                if j in data2[i]:
                    tran2=data2[i][j]
                else:
                    #tran2="NAN"
                    continue
                    
                
                #print(tran2,tran1)
                avg1=tran1["Average Response Time (sec)"]
                avg2=tran2["Average Response Time (sec)"]
                p1=tran1["90th Percentile Response Time (sec)"]
                p2=tran2["90th Percentile Response Time (sec)"]
                trans={}
                trans[j]={"Name":j,"Average for file1":avg1,"Average for file2":avg2,"90 percentile for file1":p1,"90 percentile for file2":p2}
                userpath_dis[userpath].append(trans[j])
                data3.append({j:trans[j]})
    print(userpath_dis)
    return jsonify(userpath_dis)


app.run(debug=True, port=5001)