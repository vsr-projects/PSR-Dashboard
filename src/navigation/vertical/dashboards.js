// ** Icons Import
import { Children } from 'react'
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
        navLink: '',
        children: [
          {
            id: 'ZdhDash',
            title: 'ZDH',
            icon: <Circle size={12} />,
            navLink: '/dashboard/revo/ZDH'
          },
          {
            id: 'ZdmDash',
            title: 'ZDM',
            icon: <Circle size={12} />,
            navLink: '/dashboard/revo/ZDM'
          }
        ]
      },
      {
        id: 'CeDash',
        title: 'CE',
        icon: <Circle size={12} />,
        navLink: '',
        children: [
          {
            id: 'FIDash',
            title: 'Field Insights',
            icon: <Circle size={12} />,
            navLink: '/dashboard/Ce/FI'
          },
          {
            id: 'OcDash',
            title: 'OC',
            icon: <Circle size={12} />,
            navLink: '/dashboard/Ce/Oc'
          },
          {
            id: 'ZACDash',
            title: 'Zac',
            icon: <Circle size={12} />,
            navLink: '/dashboard/Ce/ZAC'
          }
        ]
          
      },
      {
        id: 'SpmDash',
        title: 'FP',
        icon: <Circle size={12} />,
        children: [
          {
            id: 'AlDash',
            title: 'Alignments',
            icon: <Circle size={12} />,
            navLink: '/dashboard/Spm/al'
          },
          {
            id: 'IcopsDash',
            title: 'IC-Ops',
            icon: <Circle size={12} />,
            navLink: '/dashboard/Spm/icops'
          },
          {
            id: 'RepDash',
            title: 'Reports',
            icon: <Circle size={12} />,
            navLink: '/dashboard/Spm/reports'
          }
        ]
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
