import { lazy } from 'react'

const DashboardAnalytics = lazy(() => import('../../views/dashboard/analytics'))
const DashboardEcommerce = lazy(() => import('../../views/dashboard/ecommerce'))
const DashboardRevo = lazy(() => import('../../views/dashboard/Revo'))
const DashboardCE = lazy(() => import('../../views/dashboard/CE'))
const DashboardSPM = lazy(() => import('../../views/dashboard/SPM'))
const DashboardJavelin = lazy(() => import('../../views/dashboard/Javelin'))

const DashboardRoutes = [
  {
    path: '/dashboard/analytics',
    element: <DashboardAnalytics />
  },
  {
    path: '/dashboard/ecommerce',
    element: <DashboardEcommerce />
  },
  {
    path: '/dashboard/revo',
    element: <DashboardRevo />
  },
  {
    path: '/dashboard/CE',
    element: <DashboardCE />
  },
  {
    path: '/dashboard/SPM',
    element: <DashboardSPM />
  },
  {
    path: '/dashboard/Javelin',
    element: <DashboardJavelin />
  }

]

export default DashboardRoutes
