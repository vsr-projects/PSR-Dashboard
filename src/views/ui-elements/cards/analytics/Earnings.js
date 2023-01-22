// ** Third Party Components
import Chart from 'react-apexcharts'

// ** Reactstrap Imports
import { Card, CardTitle, CardText, CardBody, Row, Col } from 'reactstrap'

const Earnings = ({ success }) => {
  const options = {
    chart: {
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: { show: true, position: 'bottom' },
    comparedResult: [2, -3, 8],
    labels: ['RDS', 'EC2', 'Lambda'],
    stroke: { width: 0 },
    colors: ['#28c76f66', '#28c76f33', success],
    grid: {
      padding: {
        right: -20,
        bottom: -8,
        left: -20
      }
    },
    plotOptions: {
      pie: {
        startAngle: -10,
        donut: {
          labels: {
            show: true,
            name: {
              offsetY: 15
            },
            value: {
              offsetY: -15,
              formatter(val) {
                return `${parseInt(val)} %`
              }
            },
            total: {
              show: true,
              offsetY: 15,
              label: 'Lambda',
              formatter() {
                return '15%'
              }
            }
          }
        }
      }
    },
    responsive: [
      {
        breakpoint: 1325,
        options: {
          chart: {
            height: 100
          }
        }
      },
      {
        breakpoint: 1200,
        options: {
          chart: {
            height: 120
          }
        }
      },
      {
        breakpoint: 1065,
        options: {
          chart: {
            height: 100
          }
        }
      },
      {
        breakpoint: 992,
        options: {
          chart: {
            height: 120
          }
        }
      }
    ]
  }

  return (
    <Card className='earnings-card'>
      <CardBody>
        <Row>
          <Col xs='6'>
            <CardTitle className='mb-1 pb-4'>Top Services Usage</CardTitle>
            <div className='font-small-2'  pb-2>This Month</div>
            <h5 className='mb-1  pb-2' >$19498.83</h5>
            <CardText className='text-muted font-small-2'>
              <span className='fw-bolder'>30%</span>
              <span> less usage than last month.</span>
            </CardText>
          </Col>
          <Col xs='6'>
            <Chart options={options} series={[45, 17, 14]} type='donut' height={270} />
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default Earnings
