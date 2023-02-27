// import ReactApexcharts from 'src/@core/components/react-apexcharts'

// const series = ['265.418160658', '321.1049661618', '397.6425440087', '502.0441250361', '424.2708747963', '421.1866223324', '728.5586932608', '1409.6111941372', '656.904804858', '367.3039420512', '1104.6580654394', '2712.7676067656']

// const MonthlyUsage = () => {
//   const options = {
    
//     chart: { height: 350, type: 'line', zoom: { enabled: false } },
//     dataLabels: { enabled: false },
//     stroke: { curve: 'straight' },
//     title: { text: 'Monthly Usage', align: 'left' },
//     grid: { row: { colors: ['#f3f3f3', 'transparent'], opacity: 0.5 } },
//     xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] }


//   }

//   return <ReactApexcharts type='line' height={400} options={options} series={series} />
// }

// export default MonthyUsage

// ** Third Party Components
import Chart from 'react-apexcharts'
import { ArrowDown } from 'react-feather'
import { useState } from 'react'
import csv from "./data_summary_fivepdv.csv"
// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, CardSubtitle, Badge } from 'reactstrap'
import { release } from 'process'
import { YAxis } from 'recharts'

const RepDv = ({ direction, warning }) => {



  //State to store the values


  function create_arrays(csv)
  { 
    // console.log(csv)
    let label = [];
    let v1 = [];
    let v2 = [];
    let v3 = [];
    let v4 = [];
    let v5 = [];
    csv.map(element=>{
      label.push(element["\ufeffRelease"])
      v1.push(element["data_volume_table1"])
      v2.push(element["data_volume_table2"])
      v3.push(element["data_volume_table3"])
      v4.push(element["data_volume_table4"])
      v5.push(element["data_volume_table5"])
    })
    let obj={
      label:label,
      v1:v1,
      v2:v2,
      v3:v3,
      v4:v4,
      v5:v5
    }
    // console.log(obj);
    return obj;
  }



  // ** Chart Options
 const options = {
   
    chart: {
    type: 'bar',
    height: 430
  },
  plotOptions: {
    bar: {
      horizontal: false,
    }
  },
  dataLabels: {
    enabled: false,
  },
  //   offsetX: -6,
  //   style: {
  //     fontSize: '12px',
  //     colors: ['#fff']
  //   }
  // },
  // stroke: {
  //   show: true,
  //   width: 1,
  //   colors: ['#fff']
  // },
  tooltip: {
    shared: true,
    intersect: false
  },
  xaxis: {
    categories:create_arrays(csv).label,
  },
  yaxis:{
    title: {
      text: "Data Volume",
      style: {
        color: '#008FFB',
      }
    },
  },
  };
let  series= [
  {
    name:"data_volume_table1",
    data:create_arrays(csv).v1
  },
 {
  name:"data_volume_table2",
  data:create_arrays(csv).v2
    
  },
  {
    name:"data_volume_table3",
    data:create_arrays(csv).v3
  },
  {
    name:"data_volume_table4",
    data:create_arrays(csv).v4
  },
  {
    name:"data_volume_table5",
    data:create_arrays(csv).v5
  }
 
]

  // ** Chart Series

 

  return (
    <Card>
      <CardHeader className='d-flex flex-sm-row flex-column justify-content-md-between align-items-start justify-content-start'>
        <div>
          <CardTitle className='mb-75' tag='h4'>
          Data volume supported vs No. of records in table
          </CardTitle>
          <CardSubtitle className='text-muted'></CardSubtitle>
        </div>
        
      </CardHeader>
      <CardBody>
        <Chart options={options} series={series} type='line' height={400} />
      </CardBody>
    </Card>
  )
}

export default RepDv
