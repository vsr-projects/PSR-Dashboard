// ** React Imports
import { useEffect, useState } from 'react'

// ** Third Party Components
import axios from 'axios'
import { DollarSign, Users } from 'react-feather'

// ** Custom Components
import StatsWithAreaChart from '@components/widgets/stats/StatsWithAreaChart'

const Aws_cost = ({ kFormatter }) => {
  // ** State
  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get('/card/card-statistics/subscribers').then(res => setData(res.data))
    return () => setData(null)
  }, [])

  return data !== null ? (
    <StatsWithAreaChart
      icon={<DollarSign size={21} />}
      color='primary'
      stats={kFormatter(data.analyticsData.subscribers)}
      statTitle='Monthly Cost'
      series={data.series}
      type='area'
    />
  ) : null
}

export default Aws_cost
