// ** Custom Components
import Avatar from '@components/avatar'
import AvatarGroup from '@components/avatar-group'

// ** Icons Imports
import { Calendar, MapPin } from 'react-feather'

// ** Reactstrap Imports
import { Card, CardTitle, CardBody, CardText } from 'reactstrap'

// ** Images Imports
import illustration from '@src/assets/images/illustration/email.svg'

// ** Avatar Imports
import avatar9 from '@src/assets/images/portrait/small/avatar-s-9.jpg'
import avatar6 from '@src/assets/images/portrait/small/avatar-s-6.jpg'
import avatar8 from '@src/assets/images/portrait/small/avatar-s-8.jpg'
import avatar7 from '@src/assets/images/portrait/small/avatar-s-7.jpg'
import avatar20 from '@src/assets/images/portrait/small/avatar-s-20.jpg'

const CardMeetup = () => {
  const data = [
    {
      title: 'Billy Hopkins',
      placement: 'bottom',
      img: avatar9,
      imgHeight: 33,
      imgWidth: 33
    },
    {
      title: 'Amy Carson',
      placement: 'bottom',
      img: avatar6,
      imgHeight: 33,
      imgWidth: 33
    },
    {
      title: 'Brandon Miles',
      placement: 'bottom',
      img: avatar8,
      imgHeight: 33,
      imgWidth: 33
    },
    {
      title: 'Daisy Weber',
      placement: 'bottom',
      img: avatar7,
      imgHeight: 33,
      imgWidth: 33
    },
    {
      title: 'Jenny Looper',
      placement: 'bottom',
      img: avatar20,
      imgHeight: 33,
      imgWidth: 33
    },
    {
      meta: '+42'
    }
  ]

 
}

export default CardMeetup
