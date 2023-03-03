// ** React Imports
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Table } from 'reactstrap'

// ** Third Party Components
import tavg from '../../../dashboard/Spm/reports/tavg'
import RepDropdowntable1 from './RepDropdowntable1'
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

const RepDropdownf = props => {
  // ** State
  const [scrollModal, setScrollModal] = useState(false)
  const [scrollInnerModal, setScrollInnerModal] = useState(false)
  

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
          <Col lg="4" md="12">
            <div>
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
                  {/* {handleDownload()} */}
                  
                </ModalBody>
                <ModalFooter>
                  <Button color='primary' onClick={() => setScrollInnerModal(!scrollInnerModal)}>
                    Download
                  </Button>
                </ModalFooter>
              </Modal>
            </div>
            <div style={{paddingTop: "20px", paddingLeft:"10px", display: "flex"}}>
              <CardTitle className="mb-50 pt-10 mb-sm-0" style={{textAlign : "center", color : 'primary'}}>
                Average Stats
              <RepDropdowntable1/>
              </CardTitle>
              <CardTitle className="mb-50 pt-10 mb-sm-0" style={{paddingLeft:"10px", textAlign : "center"}}>
                Max Transactions
                <RepDropdowntable1/>
              </CardTitle>
              <CardTitle className="mb-50 pt-10 mb-sm-0" style={{paddingLeft:"10px", textAlign : "center"}}>
                Observations & Issues
                <RepDropdowntable1/>
              </CardTitle>
              
            </div>
            <div style={{paddingTop: "20px"}}>
              
              
            </div>
            
          </Col>
          <Col lg="4" md="12">
            <tavg></tavg>
          </Col>
        </Col>
      </Row>
    </Card>
  ) 
}


export default RepDropdownf
