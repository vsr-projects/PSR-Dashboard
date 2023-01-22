// ** React Imports
import { useEffect, useState } from 'react'

// ** Third Party Components
import axios from 'axios'
import Chart from 'react-apexcharts'

// ** Utils
import { kFormatter } from '@utils'

// ** Reactstrap Imports
import {
  Row,
  Col,
  Card,
  Button,
  CardBody,
  CardText,
  Progress,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown
} from 'reactstrap'

const SupportTracker = props => {
  // ** States
  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get('/card/card-analytics/avg-sessions').then(res => setData(res.data))
    return () => setData(null)
  }, [])

  const options = {
      chart: {
        sparkline: { enabled: true },
        toolbar: { show: false }
      },
      grid: {
        show: false,
        padding: {
          left: 0,
          right: 0
        }
      },
      states: {
        hover: {
          filter: 'none'
        }
      },
      colors: ['#ebf0f7', '#ebf0f7', props.primary, '#ebf0f7', '#ebf0f7', '#ebf0f7'],
      plotOptions: {
        bar: {
          columnWidth: '45%',
          distributed: true,
          borderRadius: 8,
          borderRadiusApplication: 'end'
        }
      },
      tooltip: {
        x: { show: false }
      },
      xaxis: {
        type: 'numeric'
      }
    },
    series = [
      {
        name: 'Sessions',
        data: [75, 125, 225, 175, 125, 75, 25]
      }
    ]

  return data !== null ? (
    <Card>
      <CardBody>
        <Row className='pb-50'>
          <Col
            sm={{ size: 6, order: 1 }}
            xs={{ order: 2 }}
            className='d-flex justify-content-between flex-column mt-lg-0 mt-2'
          >
            <div className='session-info mb-1 mb-lg-0'>
              <h2 className='fw-bold mb-25'>4</h2>
              <CardText className='fw-bold mb-2'>Upcoming POCs </CardText>
              {/* <h5 className='font-medium-2'>
                <span className='text-success me-50'>{data.growth}</span>
                <span className='fw-normal'>vs last 7 days</span>
              </h5> */}
            </div>
            
          </Col>
          <Col
            sm={{ size: 6, order: 2 }}
            xs={{ order: 1 }}
            className='d-flex justify-content-between flex-column text-end'
          >

         
          </Col>
        </Row>
        <hr />
        <Row className='pt-50'>
          <Col className='mb-2' md='6' sm='12'>
            <p className='mb-50'>Neoload Ui Rendering</p>
            <Progress className='avg-session-progress mt-25' value='1' />
          </Col>
          <Col className='mb-2' md='6' sm='12'>
            <p className='mb-50'>Neoload 9.0</p>
            <Progress className='avg-session-progress progress-bar-warning mt-25' value='1' />
          </Col>
          <Col md='6' sm='12'>
            <p className='mb-50'>DynamoDB</p>
            <Progress className='avg-session-progress progress-bar-danger mt-25' value='1' />
          </Col>
          <Col md='6' sm='12'>
            <p className='mb-50 '>RedisDb</p>
            <Progress className='avg-session-progress progress-bar-success mt-25' value='1' />
          </Col>
          
        </Row>
      </CardBody>
    </Card>
  ) : null
}
export default SupportTracker
