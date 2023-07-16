import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import RepDropdowntable1 from "./RepDropdowntable1"
import RepDropdowntable2 from "./RepDropdowntable2"
import {
  Row,
  Col,
  Card,
  CardTitle,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledButtonDropdown
} from "reactstrap"

const checkIfDataExists = async (release) => {
  try {
    const response = await fetch(`/path/to/xml/files/${release}.xml`)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    return true
  } catch (error) {
    console.error('Error fetching XML file:', error)
    return false
  }
}

const RepDropdownf = ({ setReleaseData }) => {
  const [selectedRelease, setSelectedRelease] = useState("R9")
  const [dataExists, setDataExists] = useState(true)  // New state

  useEffect(() => {
    const fetchData = async () => {
      const doesDataExist = await checkIfDataExists(selectedRelease)
      setDataExists(doesDataExist)
    }
  
    fetchData()
  }, [selectedRelease])
  
  const handleReleaseSelect = (release) => {
    setSelectedRelease(release)
    setReleaseData(release)  // This will update the state in the parent component
  }

  return (
    <Card className="card-revenue-budget">
      <Row className="mx-0">
        <Col className="revenue-report-wrapper" md="12" xs="12">
          <div className="d-sm-flex justify-content-between align-items-center mb-3">
            <CardTitle className="mb-50 mb-sm-0">
              Select Release version from the dropdown to get Release specific
              metrics
            </CardTitle>

            <UncontrolledButtonDropdown>
              <DropdownToggle
                className="budget-dropdown"
                outline
                color="primary"
                size="lg"
                caret
              >
                {selectedRelease}
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={() => handleReleaseSelect("R1")}>
                  R1
                </DropdownItem>
                <DropdownItem onClick={() => handleReleaseSelect("R2")}>
                  R2
                </DropdownItem>
                <DropdownItem onClick={() => handleReleaseSelect("R3")}>
                  R3
                </DropdownItem>
                <DropdownItem onClick={() => handleReleaseSelect("R4")}>
                  R4
                </DropdownItem>
                <DropdownItem onClick={() => handleReleaseSelect("R5")}>
                  R5
                </DropdownItem>
                <DropdownItem onClick={() => handleReleaseSelect("R6")}>
                  R6
                </DropdownItem>
                <DropdownItem onClick={() => handleReleaseSelect("R7")}>
                  R7
                </DropdownItem>
                <DropdownItem onClick={() => handleReleaseSelect("R8")}>
                  R8
                </DropdownItem>
                <DropdownItem onClick={() => handleReleaseSelect("R9")}>
                  R9
                </DropdownItem>
                <DropdownItem onClick={() => handleReleaseSelect("R10")}>
                  R10
                </DropdownItem>
                <DropdownItem onClick={() => handleReleaseSelect("R11")}>
                  R11
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>
          </div>

          <Row className="mx-0" style={{ overflowX: "auto" }}>
            <Col
              lg="6"
              md="12"
              sm="12"
              xs="12"
              className="pr-lg-1 mb-2 mb-lg-0"
            >
              {dataExists ? (
                <RepDropdowntable1 data={selectedRelease} />
              ) : (
                <div>Data for {selectedRelease} is not available.</div>
              )}
            </Col>

            <Col lg="6" md="12" sm="12" xs="12" className="pl-lg-1">
              {dataExists ? (
                <RepDropdowntable2 data={selectedRelease} />
              ) : (
                <div>Data for {selectedRelease} is not available.</div>
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  )
}

export default RepDropdownf
