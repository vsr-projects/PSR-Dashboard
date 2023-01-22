// ** Custom Components
import Avatar from '@components/avatar'

// ** Icons Imports
import * as Icon from 'react-feather'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'

const CardTransactions = () => {
  const transactionsArr = [
    {
      title: 'Aws CloudTrail',
      color: 'light-success',
      
      amount: '$81',
      Icon: Icon['Pocket'],
      down: true
    },
    {
      title: 'AmazonCloudWatch',
      color: 'light-success',
      
      amount: '$610',
      Icon: Icon['Check']
    },
    {
      title: 'Amazon S3',
      color: 'light-success',
      
      amount: '$333',
      Icon: Icon['DollarSign']
    },
    {
      title: 'Amazon Elastic MapReduce',
      color: 'light-success',
      
      amount: '$333',
      Icon: Icon['CreditCard'],
      down: true
    },
    {
      title: 'Amazon FSx',
      color: 'light-success',
     
      amount: '$163',
      Icon: Icon['TrendingUp']
    }
  ]

  const renderTransactions = () => {
    return transactionsArr.map(item => {
      return (
        <div key={item.title} className='transaction-item'>
          <div className='d-flex'>
            <Avatar className='rounded' color={item.color} icon={<item.Icon size={18} />} />
            <div>
              <h6 className='transaction-title'>{item.title}</h6>
              <small>{item.subtitle}</small>
            </div>
          </div>
          <div className={`fw-bolder ${item.down ? 'text-warning' : 'text-warning'}`}>{item.amount}</div>
        </div>
      )
    })
  }

  return (
    <Card className='card-transaction'>
      <CardHeader>
        <CardTitle tag='h4'>Cost usage</CardTitle>
        
        <Icon.MoreVertical size={18} className='cursor-pointer' />
      </CardHeader>
      <CardBody>{renderTransactions()}</CardBody>
    </Card>
  )
}

export default CardTransactions
