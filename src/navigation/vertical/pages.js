// ** Icons Import
import { FileText, Circle, Square, UserCheck } from 'react-feather'

export default [
  {
    id: 'pages',
    title: '',
    icon: <FileText size={20} />,
    children: [
      {
        id: 'accountSettings',
        title: 'Account Settings',
        icon: <Circle size={12} />,
        permissions: ['admin', 'editor'],
        navLink: '/pages/account-settings'
      },
      {
        id: 'profile',
        title: 'Profile',
        icon: <Circle size={12} />,
        permissions: ['admin', 'editor'],
        navLink: '/pages/profile',
        collapsed: true
      },
      {
        id: 'faq',
        title: 'FAQ',
        icon: <Circle size={12} />,
        permissions: ['admin', 'editor'],
        navLink: '/pages/faq'
      }
    ]
  }
]
