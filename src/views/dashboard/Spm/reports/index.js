// ** React Imports
import { useContext } from 'react'

// ** Reactstrap Imports
import { Row, Col, Card, CardBody } from 'reactstrap'

// ** Context
import { ThemeColors } from '@src/utility/context/ThemeColors'

// ** Demo Components
import CompanyTable from './CompanyTable'
import Earnings from '@src/views/ui-elements/cards/analytics/Earnings'
import CardMedal from '@src/views/ui-elements/cards/advance/CardMedal'
import CardMeetup from '@src/views/ui-elements/cards/advance/CardMeetup'
import StatsCard from '@src/views/ui-elements/cards/statistics/StatsCard'
import GoalOverview from '@src/views/ui-elements/cards/analytics/GoalOverview'
import RevenueReport from '@src/views/ui-elements/cards/analytics/RevenueReport'
import OrdersBarChart from '@src/views/ui-elements/cards/statistics/OrdersBarChart'
import CardTransactions from '@src/views/ui-elements/cards/advance/CardTransactions'
import ProfitLineChart from '@src/views/ui-elements/cards/statistics/ProfitLineChart'
import CardBrowserStates from '@src/views/ui-elements/cards/advance/CardBrowserState'
import RepRds from '@src/views/ui-elements/cards/analytics/RepRds'
import FPhc from '@src/views/ui-elements/cards/analytics/FPhc'
import RepUsers from '../../../ui-elements/cards/analytics/RepUsers'
import RepNfr from '../../../ui-elements/cards/analytics/RepNfr'
import RepDv from '../../../ui-elements/cards/analytics/RepDv'
import { MaxTransactions } from '../../../ui-elements/cards/analytics/MaxTransactions'
// ** Styles
import '@styles/react/libs/charts/apex-charts.scss'
import '@styles/base/pages/dashboard-ecommerce.scss'
import { AverageStats } from '../../../ui-elements/cards/analytics/AverageStats'

const RepDashboard = () => {
  // ** Context
  const { colors } = useContext(ThemeColors)

  // ** vars
  const trackBgColor = '#e9ecef'

  return (
    <div id='dashboard-ecommerce'>
      <Row className='match-height'>
        <Col lg='4' md='6' >
          <Card className='card-tiny-line-stats'>
            <CardBody className='pb-50'>
            <h6>>Observations & Issues</h6>
            <h4></h4>
            </CardBody>
          </Card>
        </Col>
        <Col lg='4' md='6' >
        <Card className='card-tiny-line-stats'>
            <CardBody className='pb-50'>
            <AverageStats/>            
            </CardBody>
          </Card>
        </Col>
        <Col lg='4' md='6' >
        <Card className='card-tiny-line-stats'>
            <CardBody className='pb-50'>
            <MaxTransactions/>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className='match-height'>
        {/* <Col lg='4' md='12'>
          <Row className='match-height'>
            <Col lg='6' md='3' xs='6'>
              <OrdersBarChart warning={colors.warning.main} />
            </Col>
            <Col lg='6' md='3' xs='6'>
              <ProfitLineChart info={colors.info.main} />
            </Col>
            <Col lg='12' md='6' xs='12'>
              <Earnings success={colors.success.main} />
            </Col>
          </Row>
        </Col> */}
        <Col lg='12' md='20'>
          <FPhc primary={colors.primary.main} warning={colors.warning.main} />
        </Col>
      </Row>
      <Row className='match-height'>
        <Col lg='6' md='10'>
          <RepRds primary={colors.primary.main} warning={colors.warning.main} />
        </Col>
        <Col lg='6' md='10'>
          <RepUsers primary={colors.primary.main} warning={colors.warning.main} />
        </Col>
      </Row>
      <Row className='match-height'>
        <Col lg='6' md='10'>
          <RepNfr primary={colors.primary.main} warning={colors.warning.main} />
        </Col>
        <Col lg='6' md='10'>
          <RepDv primary={colors.primary.main} warning={colors.warning.main} />
        </Col>
      </Row>
      {/* <Row className='match-height'>
        <Col lg='4' md='6' xs='12'>
          <CardTransactions />
        </Col>
        <Col lg='4' md='6' xs='12'>
          <GoalOverview success={colors.success.main} />
        </Col>
        <Col lg='4' md='6' xs='12'>
          <CardBrowserStates colors={colors} trackBgColor={trackBgColor} />
        </Col>
        
        
      </Row> */}
    </div>
  )
}

export default RepDashboard
