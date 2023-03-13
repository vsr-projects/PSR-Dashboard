from flask import Flask, jsonify, request
import boto3
import requests
import traceback
import os
from bs4 import BeautifulSoup
import sys
from datetime import datetime, timedelta
import xml.etree.cElementTree as ET

tree = ET.ElementTree(file=r"sprint3_warmup_report.xml")
root = tree.getroot()


app=Flask(__name__)


duration=0
top_error=[]
top_avg=[]
stats=[]

class Dash():
    def __init__(self, username, password,
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
        client = self._session.client('ce') #cost explorer service
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
@app.route('/createSession/<string:username>/<string:Pas>', methods=['Get'])
def sahil(username,Pas):
    global mainObj
    mainObj= Dash(username,Pas)
    session=mainObj.create_session('aws-a0000-glbl-00-r-rol-shrd-psr-pwr01', '654797948623')
    #print("session ________________________________",Sess)
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
    path=r"C:\Users\sb31003\Desktop\Backend\dashboard-data"
    entities = os.listdir(path)
    print("paths are --------------------",entities)
    return jsonify(entities)


@app.route('/projects/<string:project>', methods=['Get'])
def getModule(project):
    path=r"C:\Users\sb31003\Desktop\Backend\dashboard-data"
    module=path+"/"+project
    entities = os.listdir(module)
    print("modules are------------",entities)
    return jsonify(entities)

@app.route('/projects/stats', methods=['Get'])
def getStats():
    getHostpot(root)
    print(top_error)
    print(duration)
    print(stats)
    Allstats=[]
    Allstats.append({"Top_error":top_error})
    
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
            elif i.tag=='topavg':
                for k in i:
                    #k.attrib
                    top_avg.append(k.attrib)
            elif i.tag=='topmax':
                for k in i:
                    #k.attrib
                    top_avg.append(k.attrib)
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
print(top_error)
print(duration)
print(stats)



app.run(debug=True)


