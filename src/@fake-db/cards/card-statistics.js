import mock from '../mock'

const data = {
  orders_bar_chart: {
    title: 'Total Aws Services',
    statistics: '80',
    series: [
      {
        name: '2022',
        data: [10, 20, 40, 60, 80]
      }
    ]
  },
  profit_line_chart: {
    title: 'Dashboard Active Sessions',
    statistics: '5',
    series: [
      {
        name: 'Uptime',
        data: [0, 2, 5, 8, 0, 10]
      }
    ]
  },
  subscribers_gained: {
    series: [
      {
        name: 'Subscribers',
        data: [17, 25, 30, 32, 35, 38]
      }
    ],
    analyticsData: {
      subscribers: 41
    }
  },
  revenueGenerated: {
    series: [
      {
        name: 'Revenue',
        data: [350, 275, 400, 300, 350, 300, 450]
      }
    ],
    analyticsData: {
      revenue: 97500
    }
  },
  quarterlySales: {
    series: [
      {
        name: 'Sales',
        data: [10, 15, 7, 12, 3, 16]
      }
    ],
    analyticsData: {
      sales: '36%'
    }
  },
  ordersRecevied: {
    series: [
      {
        name: 'Orders',
        data: [10, 15, 8, 15, 7, 12, 8]
      }
    ],
    analyticsData: {
      orders: 38
    }
  },
  siteTraffic: {
    series: [
      {
        name: 'Traffic Rate',
        data: [150, 200, 125, 225, 200, 250]
      }
    ]
  },
  activeUsers: {
    series: [
      {
        name: 'Active Users',
        data: [750, 1000, 900, 1250, 1000, 1200, 1100]
      }
    ]
  },
  newsletter: {
    series: [
      {
        name: 'Newsletter',
        data: [365, 390, 365, 400, 375, 400]
      }
    ]
  }
}

mock.onGet('/card/card-statistics/orders-bar-chart').reply(() => [200, data.orders_bar_chart])

mock.onGet('/card/card-statistics/profit-line-chart').reply(() => [200, data.profit_line_chart])


mock.onGet('/card/card-statistics/subscribers').reply(() => [200, data.subscribers_gained])

mock.onGet('/card/card-statistics/revenue').reply(() => [200, data.revenueGenerated])

mock.onGet('/card/card-statistics/sales').reply(() => [200, data.quarterlySales])

mock.onGet('/card/card-statistics/orders').reply(() => [200, data.ordersRecevied])

mock.onGet('/card/card-statistics/site-traffic').reply(() => [200, data.siteTraffic])

mock.onGet('/card/card-statistics/active-users').reply(() => [200, data.activeUsers])

mock.onGet('/card/card-statistics/newsletter').reply(() => [200, data.newsletter])
