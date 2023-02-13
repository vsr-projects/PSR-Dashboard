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
import csv from "./data_summary_nfr_breaching.csv"
// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, CardSubtitle, Badge } from 'reactstrap'
import { release } from 'process'

const RepNfr = ({ direction, warning }) => {


  function create_arrays(csv)
  { 
    console.log(csv)
    let label = [];
    let value = [];
    let nfr = [];
    csv.map(element=>{
      label.push(element["\ufeffRelease"])
      value.push(element["transactions_breaching_nfr"])
      nfr.push(element["total_no_of_transactions"])
    })
    let obj={
      label:label,
      value:value,
      nfr:nfr
    }
    console.log(obj);
    return obj;
  }



  // ** Chart Options
  const options = {
    chart: {
      zoom: {
        enabled: false
      },
      parentHeightOffset: 0,
      toolbar: {
        show: false
      }
    },

    markers: {
      strokeWidth: 7,
      strokeOpacity: 1,
      strokeColors: ['#fff'],
      colors: [warning]
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    colors: [warning],
    grid: {
      xaxis: {
        lines: {
          show: true
        }
      }
    },
    
    tooltip: {
      custom(data) {
        return `<div class='px-1 py-50'>
              <span>${data.series[data.seriesIndex][data.dataPointIndex]}</span>
            </div>`
      }
    },
    xaxis: {  
        name:release,
        categories:   create_arrays(csv).label 
      },
    
    
  }

  // ** Chart Series
  const series = [
    {
      name: "Transacations Breaching NFR",
      data: create_arrays(csv).value
    },
    {
      name: "total_no_of_transactions",
      data : create_arrays(csv).nfr
    }
  ]

  console.log(create_arrays(csv).nfr)
  return (
    <Card>
      <CardHeader className='d-flex flex-sm-row flex-column justify-content-md-between align-items-start justify-content-start'>
        <div>
          <CardTitle className='mb-75' tag='h4'>
            NFR Breachings
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

export default RepNfr
