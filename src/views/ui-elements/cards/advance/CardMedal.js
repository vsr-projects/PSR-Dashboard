// ** Reactstrap Imports
import { Card, CardBody, CardText, Button } from 'reactstrap'

// ** Images
import medal from '@src/assets/images/illustration/badge.svg'

const CardMedal = () => {
  return (
    <Card className='card-congratulations-medal'>
      <CardBody>
        <h5>Congratulations 🎉 Aman!</h5>
        <CardText className='font-small-3'>You have close the most tickets<br /> this month.</CardText>
        <h3 className='mb-75 mt-2 pt-10'>
          <a href='/' onClick={e => e.preventDefault()}>
            41
          </a>
        </h3>
        <Button color='primary'>View Sales</Button>
        <img className='congratulation-medal' src={medal} alt='Medal Pic' />
      </CardBody>
    </Card>
  )
}

export default CardMedal
