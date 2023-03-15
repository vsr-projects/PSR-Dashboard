// ** React Imports
import { useState } from 'react'

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

const Repcomp = props => {
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
            
            <div style={{paddingTop: "20px", paddingLeft:"10px", display: "flex"}}>
              <CardTitle className="mb-50 pt-10 mb-sm-0" style={{textAlign : "center", color : 'primary'}}>
                Average Stats
              <RepDropdowntable1/>
              </CardTitle>
              <CardTitle className="mb-50 pt-10 mb-sm-0" style={{paddingLeft:"10px", textAlign : "center"}}>
                Max Transactions
                <RepDropdowntable2/>
              </CardTitle>
              <CardTitle className="mb-50 pt-10 mb-sm-0" style={{paddingLeft:"10px", textAlign : "center"}}>
                Observations & Issues
                <RepDropdowntable3/>
              </CardTitle>
              
            </div>
            <div style={{paddingTop: "20px"}}>
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
                  <Button color='primary' onClick={() => window.location.href='https://doc-0g-9k-sheets.googleusercontent.com/export/jn766s3m493d3gobld9ltum80o/0qjhitrk4bl5tiv29oj1imfmo4/1678350625000/113437118082663430971/113437118082663430971/1J5sTM-seLgrXuSIePfh9IOPdsQFL1lVnt5b-3vv4Wb8?format=xlsx&id=1J5sTM-seLgrXuSIePfh9IOPdsQFL1lVnt5b-3vv4Wb8&dat=AP36HMXG6Bvg-AnjAjowGXysUXW3Zt9-FZpGcscojCFuPfBbV1Z4rFOuf-ppd5r_NNezUxknBHldDAzEkwMtnVSiIJLYto12HtCXBAEK9MsSw1GLF1xU1MpRpuAeIc8upkVDGrmiEMoaxlhELczTjGNM23rH_ZQ6dRXuZnQGvCNyBmcGL3Xsrt3xD75tQxdzlTNyPGxwOncOqEFbI2ajmRZ-BpQEv9w4Lg9lwRnrWBgWe5Tclrbx5XBbfESIy0QuMKZxS4WiIj6Axqd5A0fh_eDbpPg3ftpv97havciolKtZ2fSdQ4aPJJefecZKjhngbPEqNfwTjgaseEBGwJJ3KIyD_l6j313pRa03YYYiOVGTpVivU6M2IaUbR7kKOi9fz_zuwMtSrWpUjHG3iltqUjZd2Sqt7k-VjEpuVLZB8ze6ppksS2GRMFQFtCO0jyEzOX_fsDJAFOxxti_ywP14Ax7kO03-mrgXefE0DCSL97K1vJVhAOozASOysk5rFBGl2fwd4k4cHIPXbJNn4fvdp-FGVUWSVYrc_vx_WmP7GgTMzl3_8v2mt7GUKaKE3hJHGMmQ3EpPvDjzxYkR4Y0t4_VKmUOhCuAT5lsOVd5ZH7s35IcPwB6ux3wijyo9YVBj_ZqDPohBjYR9FbYsZ6Hd4-PU7krFz_L5QYH7oTjgx_Wy-6DP2dxm3EkVVnTo6j2DDjovtvCUbslQ67PM8iI1Kv49nxMt-bwnamtZ8bBM4vig8XvVp2HaX8g7umJvAoUvdIgl4SDsufpL7xVi5U6hRf7eSesEEo85MI9UF7FyUGqvRC6jgtsxUBwr2_fqWwXZdmgOHDYWXCmYgDE88ymr1ab2mKBI1p-O_TmfMpAjlM5_tXiptnKbSRJl_C8dwClrvsI94v1RpY8zXlJmpacZkZYoIofmR_chibinMIRwTy3WlYx4lcvw'}>
                    Download
                  </Button>
                </ModalFooter>
              </Modal>
            </div>
              
              
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


export default Repcomp
