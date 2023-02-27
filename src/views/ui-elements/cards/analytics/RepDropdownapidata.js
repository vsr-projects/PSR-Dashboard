import React, { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [selectedRelease, setSelectedRelease] = useState(null)
  const [data, setData] = useState(null)

  useEffect(() => {
    if (selectedRelease) {
      axios.get(`http://127.0.0.1:5000/projects/stats`)
        .then(response => {
          setData(response.data)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }, [selectedRelease])

  const handleReleaseSelect = (release) => {
    setSelectedRelease(release)
  }

  const renderStats = (stats) => {
    return stats.map((stat, index) => (
      <div key={index}>
        <div>{stat.name}</div>
        <div>{stat.value} {stat.unit}</div>
      </div>
    ))
  }

  const renderTopError = (errors) => {
    return errors.map((error, index) => (
      <div key={index}>
        <div>{error.name}</div>
        <div>{error.count}</div>
      </div>
    ))
  }

  const renderDuration = (duration) => {
    return (
      <div>
        <div>Duration</div>
        <div>{duration}</div>
      </div>
    )
  }

  const renderRelease = () => {
    if (!data) {
      return <div>No data available.</div>
    }

    const stats = data.stats
    const topErrors = data.Top_error
    const duration = data.Duration

    return (
      <div>
        {renderStats(stats)}
        {renderTopError(topErrors)}
        {renderDuration(duration)}
      </div>
    )
  }

  return (
    <div>
      <div>
        <button onClick={() => handleReleaseSelect('R1')}>R1</button>
        <button onClick={() => handleReleaseSelect('R2')}>R2</button>
        <button onClick={() => handleReleaseSelect('R3')}>R3</button>
      </div>
      {renderRelease()}
    </div>
  )
}

export default App
