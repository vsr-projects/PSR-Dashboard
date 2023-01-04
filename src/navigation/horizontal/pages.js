// ** Icons Import
import {
  Key,
  User,
  Info,
  Mail,
  File,
  Unlock,
  Circle,
  Square,
  FileText,
  Settings,
  Clipboard,
  DollarSign,
  HelpCircle
} from 'react-feather'

export default [
  {
    id: 'pages',
    title: 'Pages',
    icon: <FileText />,
    children: [
    
      {
        id: 'accountSettings',
        title: 'Account Settings',
        icon: <Settings />,
        navLink: '/pages/account-settings'
      },
      {
        id: 'profile',
        title: 'Profile',
        icon: <User />,
        navLink: '/pages/profile',
        collapsed: true
      },
      {
        id: 'faq',
        title: 'FAQ',
        icon: <HelpCircle />,
        navLink: '/pages/faq'
      },
      {
        id: 'knowledgeBase',
        title: 'Knowledge Base',
        icon: <Info />,
        navLink: '/pages/knowledge-base',
        parentOf: ['/pages/knowledge-base/category/questions', '/pages/knowledge-base/category']
      },

      {
        id: 'pricing',
        title: 'Pricing',
        icon: <DollarSign />,
        navLink: '/pages/pricing'
      },
      {
        id: 'license',
        title: 'License',
        icon: <FileText />,
        permissions: ['admin', 'editor'],
        navLink: '/pages/license'
      },
      {
        id: 'api-key',
        title: 'API Key',
        icon: <Key />,
        permissions: ['admin', 'editor'],
        navLink: '/pages/api-key'
      },
      {
        id: 'blog',
        title: 'Blog',
        icon: <Clipboard />,
        children: [
          {
            id: 'blogList',
            title: 'List',
            icon: <Circle />,
            navLink: '/pages/blog/list'
          },
          {
            id: 'blogDetail',
            title: 'Detail',
            icon: <Circle />,
            navLink: '/pages/blog/detail'
          },
          {
            id: 'blogEdit',
            title: 'Edit',
            icon: <Circle />,
            navLink: '/pages/blog/edit'
          }
        ]
      }
    ]
  }
]
