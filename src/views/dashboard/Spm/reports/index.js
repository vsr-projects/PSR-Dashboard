import { useState } from 'react'

// ** React Imports
import { Fragment, useContext } from 'react'

// ** Reactstrap Imports
import { Row, Col, UncontrolledButtonDropdown, CardText } from 'reactstrap'

// ** Context
import { ThemeColors } from '@src/utility/context/ThemeColors'

// ** Demo Components
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
import RepDropdownf from './RepDropdownf'
import tavg from './tavg'
import Repcomp from './Repcomp'
import ModalFormAndScroll from '../../../components/modal/ModalFormAndScroll'

// ** Styles
import '@styles/react/libs/charts/apex-charts.scss'
import '@styles/base/pages/dashboard-ecommerce.scss'
import Card from '@components/card-snippet'
import BreadCrumbs from '@components/breadcrumbs'


const RepDashboard = () => {
  // ** Context
  const { colors } = useContext(ThemeColors)

  const [releaseData, setReleaseData] = useState(null)
  // useEffect(() => {
  //   Prism.highlightAll()
  // }, [])

  // ** vars

  return (
    <div id='dashboard-ecommerce'>
      <Row className='match-height'>
        <Col lg='12' md='3' >
          <RepDropdownf setReleaseData={setReleaseData} />
          
        </Col>
        <Col lg='12' md='3' >
          <Repcomp data={releaseData} />
          
        </Col>
      </Row>
      <Row className='match-height'>
         
        <Col lg='12' md='12'>
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
    </div>
  )
}


export default RepDashboard
