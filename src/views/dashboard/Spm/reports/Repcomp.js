// ** React Imports
import { useEffect, useState } from 'react'

// ** Third Party Components
import RepDropdowntable1 from './RepDropdowntable1'
import RepDropdowntable2 from './RepDropdowntable2'
import RepDropdowntable3 from './RepDropdowntable3'
import RepDropdowntablecomp from './RepDropdowntablecomp'
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
  ModalFooter,
  Container} from 'reactstrap'
import DataTable from 'react-data-table-component'
import { Box } from 'react-feather'

const Repcomp = props => {
  // ** State
  const [scrollModal, setScrollModal] = useState(false)
  const [scrollInnerModal, setScrollInnerModal] = useState(false)
  const [stats, setStats] = useState([])
  const columns  = [
    {
        name: 'Name',
        selector: (row) => row.Name,
        sortable:true,
        minWidth: '250px',
        style: {
          color: '#202124',
          fontSize: '15px',
          fontWeight: 600,
        },
        // style:{
        //   padding:"1%",
        //   color:"black",
        //   fontWeight:"900",
        //   fontSize:"0.8rem"
        // }
    },
    {
      name: 'Value1',
      selector: (row) => row["Average for file1"],
      sortable:true,
      style: {
        color: 'rgba(0,0,0,.54)',
      },
      // style:{
      //   padding:"1%",
      //   color:"black",
      //   fontWeight:"900",
      //   fontSize:"0.8rem"
      // }
    },
    {
      name: 'Value 2',
      selector: (row) => row["Average for file2"],
      sortable:true,
      style: {
        color: 'rgba(0,0,0,.54)',
      },
      // style:{
      //   padding:"1%",
      //   color:"black",
      //   fontWeight:"900",
      //   fontSize:"0.8rem"
      // }
    },
    {
      name: 'P value1',
      selector: (row) => row["90 percentile for file1"],
      sortable:true,
      
      style: {
        color: 'rgba(0,0,0,.54)',
      },
      // style:{
      //   padding:"1%",
      //   color:"black",
      //   fontWeight:"900",
      //   fontSize:"0.8rem"
      // }
    },
    {
      name: 'P value2',
      selector: (row) => row["90 percentile for file2"],
      sortable:true,
      style: {
        color: 'rgba(0,0,0,.54)',
      },
      // style:{
      //   padding:"1%",
      //   color:"black",
      //   fontWeight:"900",
      //   fontSize:"0.8rem"
      // }
    },
];

  useEffect(() => {
    fetch('http://127.0.0.1:5001/projects/compare/r9&r10',{
  
    })
      .then((response) => (response.json()))
      .then((data)=>{
      setStats(data)
        
      })
 
      .catch(error => {
        console.log(error)
      })
  }, [])
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
              Select between two version from the dropdown to get Release specific
              comparision metrics
            </CardTitle>
          </div>
          <div> 
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
                <DropdownItem href=" " tag="a">
                  R1
                </DropdownItem>
                <DropdownItem href=" " tag="a">
                  R2
                </DropdownItem>
                <DropdownItem href=" " tag="a">
                  R3
                </DropdownItem>
                <DropdownItem href=" " tag="a">
                  R4
                </DropdownItem>
                <DropdownItem href=" " tag="a">
                  R5
                </DropdownItem>
                <DropdownItem href=" " tag="a">
                  R6
                </DropdownItem>
                <DropdownItem href=" " tag="a">
                  R7
                </DropdownItem>
                <DropdownItem href=" " tag="a">
                  R8
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; vs &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
                <DropdownItem href=" " tag="a">
                  R1
                </DropdownItem>
                <DropdownItem href=" " tag="a">
                  R2
                </DropdownItem>
                <DropdownItem href=" " tag="a">
                  R3
                </DropdownItem>
                <DropdownItem href=" " tag="a">
                  R4
                </DropdownItem>
                <DropdownItem href=" " tag="a">
                  R5
                </DropdownItem>
                <DropdownItem href=" " tag="a">
                  R6
                </DropdownItem>
                <DropdownItem href=" " tag="a">
                  R7
                </DropdownItem>
                <DropdownItem href=" " tag="a">
                  R8
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>
          </div>
          <Col >
            
            <div style={{paddingTop: "20px", paddingLeft:"-10px", display: "flex"}}>
        
            <Container  style={{
              display:"flex",
              
              flexDirection:"row"
            }}>
              <Container width="50%" paddingLeft="-20px">
          <DataTable pagination title="business insights"  columns={columns} data={stats["_business insights"]} />
          </Container>
          <Container  width="50%">
          <DataTable title="Plan tab"  columns={columns} data={stats["_plan tab"]} pagination />
          </Container>
    </Container>
              
              
            </div>
            <div style={{paddingTop: "20px"}}>
            <div >
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