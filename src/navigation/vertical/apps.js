// ** Icons Import
import { Mail, MessageSquare, CheckSquare, Calendar, FileText, Circle, ShoppingCart, User, Shield } from 'react-feather'

export default [
  {
    header: 'Apps & Pages'
  },

  {
    id: 'todo',
    title: 'Todo',
    icon: <CheckSquare size={20} />,
    navLink: '/apps/todo'
  },
  {
    id: 'calendar',
    title: 'Calendar',
    icon: <Calendar size={20} />,
    navLink: '/apps/calendar'
  },
  {
    id: 'kanban',
    title: 'Work Board',
    icon: <CheckSquare size={20} />,
    navLink: '/apps/kanban'
  },

  {
    id: 'roles-permissions',
    title: 'Roles & Permissions',
    icon: <Shield size={20} />,
    children: [
      {
        id: 'roles',
        title: 'Roles',
        icon: <Circle size={12} />,
        navLink: '/apps/roles'
      },
      {
        id: 'permissions',
        title: 'Permissions',
        icon: <Circle size={12} />,
        navLink: '/apps/permissions'
      }
    ]
  },
  {
    id: 'users',
    title: 'User',
    icon: <User size={20} />,
    children: [
      {
        id: 'list',
        title: 'List',
        icon: <Circle size={12} />,
        navLink: '/apps/user/list'
      },
      {
        id: 'view',
        title: 'View',
        icon: <Circle size={12} />,
        navLink: '/apps/user/view'
      }
    ]
  }
]
