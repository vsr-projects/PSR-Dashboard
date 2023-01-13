// ** React Imports
import { useContext } from 'react'

// ** Icons Imports
import { List } from 'react-feather'

// ** Custom Components
import Avatar from '@components/avatar'
import Timeline from '@components/timeline'
import AvatarGroup from '@components/avatar-group'

// ** Utils
// import { kFormatter } from '@utils'

// ** Context
import { ThemeColors } from '@src/utility/context/ThemeColors'

// ** Reactstrap Imports
import { Row, Col, Card, CardHeader, CardTitle, CardBody } from 'reactstrap'

// ** Demo Components
import InvoiceList from '@src/views/apps/invoice/list'
import Sales from '@src/views/ui-elements/cards/analytics/Sales'
import AvgSessions from '@src/views/ui-elements/cards/analytics/AvgSessions'
import CardAppDesign from '@src/views/ui-elements/cards/advance/CardAppDesign'
import SupportTracker from '@src/views/ui-elements/cards/analytics/SupportTracker'
import OrdersReceived from '@src/views/ui-elements/cards/statistics/OrdersReceived'
import SubscribersGained from '@src/views/ui-elements/cards/statistics/SubscribersGained'
import CardCongratulations from '@src/views/ui-elements/cards/advance/CardCongratulations'

// ** Images

// // ** Avatar Imports
// import avatar6 from '@src/assets/images/portrait/small/avatar-s-6.jpg'
// import avatar7 from '@src/assets/images/portrait/small/avatar-s-7.jpg'
// import avatar8 from '@src/assets/images/portrait/small/avatar-s-8.jpg'
// import avatar9 from '@src/assets/images/portrait/small/avatar-s-9.jpg'
// import avatar20 from '@src/assets/images/portrait/small/avatar-s-20.jpg'

// ** Styles
import '@styles/react/libs/charts/apex-charts.scss'

const RdsDashboard = () => {
  // ** Context
  const { colors } = useContext(ThemeColors)

  // ** Vars
  // const avatarGroupArr = [
  //   {
  //     imgWidth: 33,
  //     imgHeight: 33,
  //     title: 'Billy Hopkins',
  //     placement: 'bottom',
  //     img: avatar9
  //   },
  //   {
  //     imgWidth: 33,
  //     imgHeight: 33,
  //     title: 'Amy Carson',
  //     placement: 'bottom',
  //     img: avatar6
  //   },
  //   {
  //     imgWidth: 33,
  //     imgHeight: 33,
  //     title: 'Brandon Miles',
  //     placement: 'bottom',
  //     img: avatar8
  //   },
  //   {
  //     imgWidth: 33,
  //     imgHeight: 33,
  //     title: 'Daisy Weber',
  //     placement: 'bottom',
  //     img: avatar7
  //   },
  //   {
  //     imgWidth: 33,
  //     imgHeight: 33,
  //     title: 'Jenny Looper',
  //     placement: 'bottom',
  //     img: avatar20
  //   }
  // ]
 
  return (
    <div id='dashboard-analytics'>
      {/* <Row className='match-height'>
        <Col lg='6' sm='12'>
          <CardCongratulations />
        </Col>
        <Col lg='3' sm='6'>
          <SubscribersGained kFormatter={kFormatter} />
        </Col>
        <Col lg='3' sm='6'>
          <OrdersReceived kFormatter={kFormatter} warning={colors.warning.main} />
        </Col>
      </Row> */}
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

export default RdsDashboard
