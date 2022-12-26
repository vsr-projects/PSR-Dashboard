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
        id: 'analyticsDash',
        title: 'Aws Stats',
        icon: <Circle size={12} />,
        navLink: '/dashboard/analytics'
      },
      {
        id: 'eCommerceDash',
        title: 'RDS Stats',
        icon: <Circle size={12} />,
        navLink: '/dashboard/ecommerce'
      },
      {
        id: 'revoDash',
        title: 'Revo',
        icon: <Circle size={12} />,
        navLink: '/dashboard/revo'
      },
      {
        id: 'CEDash',
        title: 'CE',
        icon: <Circle size={12} />,
        navLink: '/dashboard/CE'
      },
      {
        id: 'CEDash',
        title: 'SPM',
        icon: <Circle size={12} />,
        navLink: '/dashboard/CE'
      },
      {
        id: 'CEDash',
        title: 'Javelin',
        icon: <Circle size={12} />,
        navLink: '/dashboard/Javelin'
      }
    ]
  }
]
