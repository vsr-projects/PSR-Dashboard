// ** React Imports
import { useEffect, useState } from 'react'
import axios from 'axios'
import { readFileSync } from 'fs'
import { ExcelRenderer } from 'react-excel-renderer'

// ** Third Party Components
import Prism from 'prismjs'
import Chart from 'react-apexcharts'
import tavg from '../../../dashboard/Spm/reports/tavg'
// ** Reactstrap Imports
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
  UncontrolledButtonDropdown,
  Modal,
  ModalHeader, 
  ModalBody, 
  ModalFooter, 
  Label, 
  Input
} from 'reactstrap'

const handleDownload = () => {
  // Read the CSV file using react-excel-renderer
  ExcelRenderer('../../../ui-elements/cards/analytics/FI_R10_dashboard_result.xlsx', (err, resp) => {
    if (err) {
      console.log(err)
    } else {
      setRows(resp.rows)
      setCols(resp.cols)
    }
  })

  // Display the CSV data in the modal
  const table = (
    <table>
      <thead>
        <tr>
          {cols.map(col => <th key={col}>{col}</th>)}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            {row.map((cell, index) => <td key={index}>{cell}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  )

  return table
}



const RepDropdown = props => {
  // ** State
  const [data, setData] = useState(null)
  const [scrollModal, setScrollModal] = useState(false)
  const [scrollInnerModal, setScrollInnerModal] = useState(false)
  const [rows, setRows] = useState([]);
  const [cols, setCols] = useState([]);
  

  useEffect(() => {
    axios.get('/card/card-analytics/revenue-report').then(res => setData(res.data))
    return () => setData(null)
  }, [])

  return data !== null ? (
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
                Release Version
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href="/" tag="a">
                  R1
                </DropdownItem>
                <DropdownItem href="/" tag="a">
                  R2
                </DropdownItem>
                <DropdownItem href="/" tag="a">
                  R3
                </DropdownItem>
                <DropdownItem href="/" tag="a">
                  R4
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>
          </div>
          <Col lg="2" md="12">
            <div>
              <Button color='success' outline onClick={() => setScrollInnerModal(!scrollInnerModal)}>
                Release Results
              </Button>
              <Modal scrollable isOpen={scrollInnerModal} toggle={() => setScrollInnerModal(!scrollInnerModal)}>
                <ModalHeader toggle={() => setScrollInnerModal(!scrollInnerModal)}>Modal Title</ModalHeader>
                <ModalBody>
                  <p>
                    Results for the Current Release
                    {handleDownload()}
                  </p>
                  
                  
                </ModalBody>
                <ModalFooter>
                  <Button color='primary' onClick={() => setScrollInnerModal(!scrollInnerModal)}>
                    Download
                  </Button>
                </ModalFooter>
              </Modal>
            </div>
            
          </Col>
          <Col lg="4" md="12">
            <tavg></tavg>
          </Col>
        </Col>
      </Row>
    </Card>
  ) : null
}

export default RepDropdown
