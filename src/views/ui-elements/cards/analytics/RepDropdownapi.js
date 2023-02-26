import { useEffect, useState } from 'react'
import axios from 'axios'
import Chart from 'react-apexcharts'
import tavg from '../../../dashboard/Spm/reports/tavg'

import {
  Row,
  Col,
  Card,
  Button,
  CardTitle,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Collapse,
  UncontrolledButtonDropdown
} from 'reactstrap'

const RepDropdownapi = (props) => {
  // ** State
  const [selectedRelease, setSelectedRelease] = useState(null)
  const [chartData, setChartData] = useState(null)

  useEffect(() => {
    if (selectedRelease) {
      axios.get(`/api/releases/${selectedRelease}`).then((res) => {
        setChartData(res.data.chartData)
      })
    } else {
      setChartData(null)
    }
  }, [selectedRelease])

  const handleReleaseSelect = (release) => {
    setSelectedRelease(release)
  }

  return (
    <Card className="card-revenue-budget">
      <Row className="mx-0">
        <Col className="revenue-report-wrapper" md="12" xs="12">
          <div className="d-sm-flex justify-content-between align-items-center mb-3">
            <CardTitle className="mb-50 mb-sm-0">
              Select Release version from the dropdown to get Release specific metrics
            </CardTitle>
          </div>
          <div>
            <UncontrolledButtonDropdown>
              <DropdownToggle className="budget-dropdown" outline color="primary" size="lg" caret>
                {selectedRelease ? selectedRelease : 'Release Version'}
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={() => handleReleaseSelect('R1')}>R1</DropdownItem>
                <DropdownItem onClick={() => handleReleaseSelect('R2')}>R2</DropdownItem>
                <DropdownItem onClick={() => handleReleaseSelect('R3')}>R3</DropdownItem>
                <DropdownItem onClick={() => handleReleaseSelect('R4')}>R4</DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>
          </div>
          <Col lg="4" md="12">
            <tavg></tavg>
          </Col>
        </Col>
      </Row>
      {chartData && (
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="bar"
          height={400}
        />
      )}
    </Card>
  )
}

export default RepDropdownapi
//added a selectedRelease state variable to store the currently selected release. I also added an handleReleaseSelect function that updates the selectedRelease state variable with the selected release. This function is called in the onClick handler of each DropdownItem.

//also used the selectedRelease state variable to make an API call and update the chart data whenever the selected release changes. I stored the chart data in another state variable called chartData. Finally, I passed the chartData to the Chart component to display the chart.