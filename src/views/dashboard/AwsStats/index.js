// ** React Imports
import { useContext } from 'react'

// ** Icons Imports

// ** Custom Components

// ** Utils
import { kFormatter } from '@utils'

// ** Context
import { ThemeColors } from '@src/utility/context/ThemeColors'

// ** Reactstrap Imports
import { Row, Col } from 'reactstrap'

// ** Demo Components
import InvoiceList from '@src/views/apps/invoice/list'
import AvgSessions from '@src/views/ui-elements/cards/analytics/AvgSessions'
import SupportTracker from '@src/views/ui-elements/cards/analytics/SupportTracker'
import Aws_cost from '../../ui-elements/cards/statistics/Aws_cost'
import Aws_top_services from '../../ui-elements/cards/statistics/Aws_top_services'
import Aws_top from '../../ui-elements/cards/analytics/Aws_top'
import SubscribersGained from '@src/views/ui-elements/cards/statistics/SubscribersGained'


// ** Styles
import '@styles/react/libs/charts/apex-charts.scss'

const AwsDashboard = () => {
  // ** Context
  const { colors } = useContext(ThemeColors)

  // ** Vars

 
  return (
    <div id='dashboard-analytics'>
      <Row className='match-height'>
        <Col lg='6' sm='6'>
          <Aws_cost kFormatter={kFormatter} />
        </Col>
        <Col lg='6' sm='6' xs='6'>
          <Row>
            <Aws_top success={colors.success.main} />
          </Row>  
          <Row>
            
          </Row>
        </Col>
        <Col lg='6' sm='6'>
          
          <Aws_top_services kFormatter={kFormatter} />
          
        </Col>
        <Col lg='6' sm='6'>
          <SubscribersGained kFormatter={kFormatter} />
        </Col>
        
      </Row>
      <Row className='match-height'>
        <Col lg='6' xs='12'>
          <AvgSessions primary={colors.primary.main} />
        </Col>
        <Col lg='6' xs='12'>
          <SupportTracker primary={colors.primary.main} danger={colors.danger.main} />
        </Col>
      </Row>
      
      <Row className='match-height'>
        <Col xs='12'>
          <InvoiceList />
        </Col>
      </Row>
    </div>
  )
}

export default AwsDashboard
