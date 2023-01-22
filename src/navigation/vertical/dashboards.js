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
        title: 'POC',
        icon: <Circle size={12} />,
        navLink: '/dashboard/POC'
      },
      {
        id: 'revoDash',
        title: 'Revo',
        icon: <Circle size={12} />,
        navLink: '/dashboard/revo'
      },
      {
        id: 'CeDash',
        title: 'CE',
        icon: <Circle size={12} />,
        navLink: '/dashboard/Ce' 
      },
      {
        id: 'SpmDash',
        title: 'FP',
        icon: <Circle size={12} />,
        navLink: '/dashboard/Spm' 
      },
      {
        id: 'JavelinDash',
        title: 'Javelin',
        icon: <Circle size={12} />,
        navLink: '/dashboard/Javelin' 
      }
    ]
  }
]
