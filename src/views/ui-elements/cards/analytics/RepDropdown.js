// ** React Imports
import { useEffect, useState } from 'react'

// ** Third Party Components
import axios from 'axios'
import Chart from 'react-apexcharts'
import tavg from '../../../dashboard/Spm/reports/tavg'

// ** Reactstrap Imports
import {
  Row,
  Col,
  Card,
  Button,
  CardTitle,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Collapse,
  UncontrolledButtonDropdown
} from 'reactstrap'

const RepDropdown = props => {
  // ** State
  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get('/card/card-analytics/revenue-report').then(res => setData(res.data))
    return () => setData(null)
  }, [])

  const revenueOptions = {
      chart: {
        stacked: true,
        type: 'bar',
        toolbar: { show: false }
      },
      grid: {
        padding: {
          top: -20,
          bottom: -10
        },
        yaxis: {
          lines: { show: false }
        }
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        labels: {
          style: {
            colors: '#b9b9c3',
            fontSize: '0.86rem'
          }
        },
        axisTicks: {
          show: false
        },
        axisBorder: {
          show: false
        }
      },
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      colors: [props.primary, props.warning],
      plotOptions: {
        bar: {
          columnWidth: '17%',
          borderRadius: [4],
          borderRadiusWhenStacked: 'all',
          borderRadiusApplication: 'start'
        },
        distributed: true
      },
      yaxis: {
        labels: {
          style: {
            colors: '#b9b9c3',
            fontSize: '0.86rem'
          }
        }
      }
    },
    revenueSeries = [
      {
        name: 'Earning',
        data: [95, 177, 284, 256, 105, 63, 168, 218, 72]
      },
      {
        name: 'Expense',
        data: [-145, -80, -60, -180, -100, -60, -85, -75, -100]
      }
    ]

  

  return data !== null ? (
    <Card className="card-revenue-budget">
      <Row className="mx-0">
        <Col className="revenue-report-wrapper" md="12" xs="12">
          <div className="d-sm-flex justify-content-between align-items-center mb-3">
            <CardTitle className="mb-50 mb-sm-0">
              Select Release version from the dropdown to get Release specific
              metrics
            </CardTitle>
          </div>
          <div>
            <UncontrolledButtonDropdown>
              <DropdownToggle
                className="budget-dropdown"
                outline
                color="primary"
                size="lg"
                caret
              >
                Release Version
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href="/" tag="a">
                  R1
                </DropdownItem>
                <DropdownItem href="/" tag="a">
                  R2
                </DropdownItem>
                <DropdownItem href="/" tag="a">
                  R3
                </DropdownItem>
                <DropdownItem href="/" tag="a">
                  R4
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>
          </div>
          <Col lg="4" md="12">
            <tavg></tavg>
          </Col>
        </Col>
        {/* <Col className="budget-wrapper" md="4" xs="12">
          <UncontrolledButtonDropdown>
            <DropdownToggle
              className="budget-dropdown"
              outline
              color="primary"
              size="lg"
              caret
            >
              Release Version
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem href="/" tag="a">
                R1
              </DropdownItem>
              <DropdownItem href="/" tag="a">
                R2
              </DropdownItem>
              <DropdownItem href="/" tag="a">
                R3
              </DropdownItem>
              <DropdownItem href="/" tag="a">
                R4
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledButtonDropdown>
        </Col> */}
      </Row>
    </Card>
  ) : null
}

export default RepDropdown
