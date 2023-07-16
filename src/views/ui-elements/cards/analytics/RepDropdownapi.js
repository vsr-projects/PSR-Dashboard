import { useEffect, useState } from 'react'
import axios from 'axios'
import {
  Card,
  CardTitle,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Row,
  Col,
  UncontrolledButtonDropdown
} from 'reactstrap'

const RepDropdownapi = (props) => {
  const [selectedRelease, setSelectedRelease] = useState(null)
  const [chartData, setChartData] = useState(null)

  useEffect(() => {
    if (selectedRelease) {
      axios.get(`http://127.0.0.1:5001/projects/stats/${selectedRelease}`)
        .then((res) => {
          setChartData(res.data)
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
                {selectedRelease ? selectedRelease : 'Select a Release'}
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={() => handleReleaseSelect('R1')}>R1</DropdownItem>
                <DropdownItem onClick={() => handleReleaseSelect('R2')}>R2</DropdownItem>
                {/* add more DropdownItems as needed */}
              </DropdownMenu>
            </UncontrolledButtonDropdown>
          </div>
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