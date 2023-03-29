// ** React Imports
import { useEffect, useState } from "react";

// ** Third Party Components
import RepDropdowntable1 from "./RepDropdowntable1";
import RepDropdowntable2 from "./RepDropdowntable2";
import RepDropdowntable3 from "./RepDropdowntable3";
import RepDropdowntablecomp from "./RepDropdowntablecomp";
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
  Container,
} from "reactstrap";
import DataTable from "react-data-table-component";
import { Box } from "react-feather";

const Repcomp = (props) => {
  // ** State
  const [scrollModal, setScrollModal] = useState(false);
  const [scrollInnerModal, setScrollInnerModal] = useState(false);
  const [stats, setStats] = useState([]);
  const columns = [
    {
      name: "Name",
      selector: (row) => row.Name,
      sortable: true,
      minWidth: "250px",
      style: {
        color: "#202124",
        fontSize: "15px",
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
      name: "R9 Average ",
      selector: (row) => row["Average for file1"],
      sortable: true,
      style: {
        color: "rgba(0,0,0,.54)",
      },
      // style:{
      //   padding:"1%",
      //   color:"black",
      //   fontWeight:"900",
      //   fontSize:"0.8rem"
      // }
    },
    {
      name: "R10 Average ",
      selector: (row) => row["Average for file2"],
      sortable: true,
      style: {
        color: "rgba(0,0,0,.54)",
      },
      // style:{
      //   padding:"1%",
      //   color:"black",
      //   fontWeight:"900",
      //   fontSize:"0.8rem"
      // }
    },
    {
      name: "R9 90%",
      selector: (row) => row["90 percentile for file1"],
      sortable: true,

      style: {
        color: "rgba(0,0,0,.54)",
      },
      // style:{
      //   padding:"1%",
      //   color:"black",
      //   fontWeight:"900",
      //   fontSize:"0.8rem"
      // }
    },
    {
      name: "r10 90%",
      selector: (row) => row["90 percentile for file2"],
      sortable: true,
      style: {
        color: "rgba(0,0,0,.54)",
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
    fetch("http://127.0.0.1:5001/projects/compare/r9&r10", {})
      .then((response) => response.json())
      .then((data) => {
        setStats(data);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleDownload = () => {
    window.location.href =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vT3koXDpk_fkYFgGi4qhkyeZZcr9u_Z5G2vk0SDcai_Lfpit8XR3jRaSOQM5XLKXoN87s_TajfZKKXi/pubhtml?gid=0&single=true&widget=true&headers=false";
  };

  return (
    <Card className="card-revenue-budget">
      <Row className="mx-0">
        <Col className="revenue-report-wrapper" md="12" xs="12">
          <div className="d-sm-flex justify-content-between align-items-center mb-3">
            <CardTitle className="mb-50 mb-sm-0">
              Select between two version from the dropdown to get Release
              specific comparision metrics
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
                R9
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
                <DropdownItem href=" " tag="a">
                  R9
                </DropdownItem>
                <DropdownItem href=" " tag="a">
                  R10
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; vs &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <UncontrolledButtonDropdown>
              <DropdownToggle
                className="budget-dropdown"
                outline
                color="primary"
                size="lg"
                caret
              >
                R10
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
                <DropdownItem href=" " tag="a">
                  R9
                </DropdownItem>
                <DropdownItem href=" " tag="a">
                  R10
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>
          </div>
          <Col>
            <div
              style={{
                paddingTop: "20px",
                paddingLeft: "-10px",
                display: "flex",
              }}
            >
              <Container
                style={{
                  display: "flex",
                  marginLeft: "-20px",
                  flexDirection: "row",
                }}
              >
                <Container style={{
                  width: "55%",
                  marginLeft: "-10px",
                }}>
                  <DataTable
                    pagination
                    title="business insights"
                    columns={columns}
                    data={stats["_business insights"]}
                  />
                </Container>
                <Container style={{
                  width: "50%",
                  marginLeft: "-10px",
                }}>
                  <DataTable
                    marginLeft="-40px"
                    title="Plan tab"
                    columns={columns}
                    data={stats["_plan tab"]}
                    pagination
                  /> 
                
                </Container>
              </Container>
            </div>
            <div style={{ paddingTop: "20px" }}>
              
            </div>
          </Col>
          <Col lg="4" md="12">
            <tavg></tavg>
          </Col>
        </Col>
      </Row>
    </Card>
  );
};

export default Repcomp;
