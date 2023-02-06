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
            navLink: '/dashboard/revo'
          },
          {
            id: 'ZdmDash',
            title: 'ZDM',
            icon: <Circle size={12} />,
            navLink: '/dashboard/revo2'
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
            navLink: '/dashboard/Ce'
          },
          {
            id: 'OcDash',
            title: 'OC',
            icon: <Circle size={12} />,
            navLink: ''
          },
          {
            id: 'ZacDash',
            title: 'Zac',
            icon: <Circle size={12} />,
            navLink: ''
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
            navLink: '/dashboard/Spm'
          },
          {
            id: 'IcopsDash',
            title: 'IC-Ops',
            icon: <Circle size={12} />,
            navLink: ''
          },
          {
            id: 'RepDash',
            title: 'Reports',
            icon: <Circle size={12} />,
            navLink: ''
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
