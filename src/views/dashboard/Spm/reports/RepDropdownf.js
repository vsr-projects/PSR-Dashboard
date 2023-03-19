import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// ** Third Party Components
import RepDropdowntable1 from './RepDropdowntable1'
import RepDropdowntable2 from './RepDropdowntable2'
import RepDropdowntable3 from './RepDropdowntable3'

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
  UncontrolledButtonDropdown,
  Modal,
  ModalHeader, 
  ModalBody, 
  ModalFooter} from 'reactstrap'

const RepDropdownf = props => {
  // ** State
  const [scrollModal, setScrollModal] = useState(false)
  const [scrollInnerModal, setScrollInnerModal] = useState(false)

  const handleDownload = () => {
    window.location.href =
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vT3koXDpk_fkYFgGi4qhkyeZZcr9u_Z5G2vk0SDcai_Lfpit8XR3jRaSOQM5XLKXoN87s_TajfZKKXi/pubhtml?gid=0&single=true&widget=true&headers=false'
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
                Release Version
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href="" tag="a">
                  R1
                </DropdownItem>
                <DropdownItem href="" tag="a">
                  R2
                </DropdownItem>
                <DropdownItem href="" tag="a">
                  R3
                </DropdownItem>
                <DropdownItem href="" tag="a">
                  R4
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>
          </div>
          <Col lg="4" md="12">
            <div style={{paddingTop: "20px", paddingLeft:"10px", display: "flex"}}>
              <CardTitle className="mb-50 pt-10 mb-sm-0" style={{textAlign : "center", color : 'primary'}}>
                Average Stats
              <RepDropdowntable1/>
              </CardTitle>
              <CardTitle className="mb-50 pt-10 mb-sm-0" style={{paddingLeft:"10px", textAlign : "center"}}>
                Max Transactions
                <RepDropdowntable2/>
              </CardTitle>
              {/* <CardTitle className="mb-50 pt-10 mb-sm-0" style={{paddingLeft:"10px", textAlign : "center"}}>
                Observations & Issues
                <RepDropdowntable3/>
              </CardTitle>
              <RepDropdowntable3/> */}
            </div>
            <div style={{paddingTop: "20px"}}>
              <Button color='success' outline onClick={() => setScrollInnerModal(!scrollInnerModal)}>
                Release Results
              </Button>
              <Modal scrollable isOpen={scrollInnerModal} toggle={() => setScrollInnerModal(!scrollInnerModal)}>
                <ModalHeader toggle={() => setScrollInnerModal(!scrollInnerModal)}>Modal Title</ModalHeader>
                <ModalBody>
                  <p> 
                    Results for the Current Release
                  </p>
                  <iframe width="100%" height="1000px" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT3koXDpk_fkYFgGi4qhkyeZZcr9u_Z5G2vk0SDcai_Lfpit8XR3jRaSOQM5XLKXoN87s_TajfZKKXi/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
                </ModalBody>
                <ModalFooter>
                  <Button color='primary' onClick={handleDownload}>
                    Download
                  </Button>
                </ModalFooter>
              </Modal>
            </div>
          </Col>
        </Col>
      </Row>
    </Card>
  ) 
}

export default RepDropdownf