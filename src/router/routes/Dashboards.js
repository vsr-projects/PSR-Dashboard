import { lazy } from 'react'

const DashboardAws = lazy(() => import('../../views/dashboard/AwsStats'))
const DashboardPOC = lazy(() => import('../../views/dashboard/POC'))
const DashboardRevo = lazy(() => import('../../views/dashboard/revo'))
const DashboardCe = lazy(() => import('../../views/dashboard/Ce'))
const DashboardSpm = lazy(() => import('../../views/dashboard/Spm'))
const DashboardJav = lazy(() => import('../../views/dashboard/Javelin'))


const DashboardRoutes = [
  {
    path: '/dashboard/AwsStats',
    element: <DashboardAws />
  },
  {
    path: '/dashboard/POC',
    element: <DashboardPOC />
  },
  {
    path: '/dashboard/revo',
    element: <DashboardRevo />
  },
  {
    path: '/dashboard/CE',
    element: <DashboardCe />
  },
  {
    path: '/dashboard/Spm',
    element: <DashboardSpm />
  },
  {
    path: '/dashboard/Javelin',
    element: <DashboardJav />
  }

]

export default DashboardRoutes
