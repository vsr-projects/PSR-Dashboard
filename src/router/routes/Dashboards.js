import { lazy } from 'react'

const DashboardAws = lazy(() => import('../../views/dashboard/AwsStats'))
const DashboardPOC = lazy(() => import('../../views/dashboard/POC'))
const DashboardZDH = lazy(() => import('../../views/dashboard/revo/ZDH'))
const DashboardZDM = lazy(() => import('../../views/dashboard/revo/ZDM'))
const DashboardFI = lazy(() => import('../../views/dashboard/Ce/FI'))
const DashboardOc = lazy(() => import('../../views/dashboard/Ce/Oc'))
const DashboardZAC = lazy(() => import('../../views/dashboard/Ce/ZAC'))
const Dashboardal = lazy(() => import('../../views/dashboard/Spm/al'))
const Dashboardicops = lazy(() => import('../../views/dashboard/Spm/icops'))
const Dashboardrep = lazy(() => import('../../views/dashboard/Spm/reports'))

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
    path: '/dashboard/revo/ZDH',
    element: <DashboardZDH />
  },
  {
    path: '/dashboard/revo/ZDM',
    element: <DashboardZDM />
  },
  {
    path: '/dashboard/Ce/Oc',
    element: <DashboardOc />
  },
  {
    path: '/dashboard/Ce/ZAC',
    element: <DashboardZAC />
  },
  {
    path: '/dashboard/Ce/FI',
    element: <DashboardFI />
  },
  {
    path: '/dashboard/Spm/al',
    element: <Dashboardal />
  },
  {
    path: '/dashboard/Spm/icops',
    element: <Dashboardicops />
  },
  {
    path: '/dashboard/Spm/reports',
    element: <Dashboardrep />
  },
  {
    path: '/dashboard/Javelin',
    element: <DashboardJav />
  }

]

export default DashboardRoutes
