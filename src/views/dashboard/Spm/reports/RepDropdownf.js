import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import RepDropdowntable1 from './RepDropdowntable1'
import RepDropdowntable2 from './RepDropdowntable2'
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
} from 'reactstrap'

const RepDropdownf = (props) => {
  const [scrollModal, setScrollModal] = useState(false)
  const [scrollInnerModal, setScrollInnerModal] = useState(false)

  const handleDownload = () => {
    window.location.href =
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vT3koXDpk_fkYFgGi4qhkyeZZcr9u_Z5G2vk0SDcai_Lfpit8XR3jRaSOQM5XLKXoN87s_TajfZKKXi/pubhtml?gid=0&single=true&widget=true&headers=false'
  }

  return (
    <Card className='card-revenue-budget'>
      <Row className='mx-0'>
        <Col className='revenue-report-wrapper' md='12' xs='12'>
          <div className='d-sm-flex justify-content-between align-items-center mb-3'>
            <CardTitle className='mb-50 mb-sm-0'>
              Select Release version from the dropdown to get Release specific
              metrics
            </CardTitle>

            <UncontrolledButtonDropdown>
              <DropdownToggle
                className='budget-dropdown'
                outline
                color='primary'
                size='lg'
                caret
              >
                R6
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href='' tag='a'>
                  R1
                </DropdownItem>
                <DropdownItem href='' tag='a'>
                  R2
                </DropdownItem>
                <DropdownItem href='' tag='a'>
                  R3
                </DropdownItem>
                <DropdownItem href='' tag='a'>
                  R4
                </DropdownItem>
                <DropdownItem href='' tag='a'>
                  R5
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>
          </div>

          <Row className='mx-0' style={{ overflowX: 'auto' }}>
            <Col lg='6' md='12' sm='12' xs='12' className='pr-lg-1 mb-2 mb-lg-0'>
              <RepDropdowntable1 />
            </Col>

            <Col lg='6' md='12' sm='12' xs='12' className='pl-lg-1'>
              <RepDropdowntable2 />
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  )
}

export default RepDropdownf