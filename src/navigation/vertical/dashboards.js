// ** Icons Import
import { Home, Circle } from 'react-feather'

export default [
  {
    id: 'dashboards',
    title: 'Dashboards',
    icon: <Home size={20} />,
    badge: 'light-warning',
    badgeText: '6',
    children: [
      {
        id: 'awsDash',
        title: 'AWS Stats',
        icon: <Circle size={12} />,
        navLink: '/dashboard/AwsStats'
      },
      {
        id: 'rdsDash',
        title: 'RDS Stats',
        icon: <Circle size={12} />,
        navLink: '/dashboard/RdsStats'
      },
      {
        id: 'revoDash',
        title: 'Revo',
        icon: <Circle size={12} />,
        navLink: '/dashboard/revo'
      }
      
    ]
  }
]
