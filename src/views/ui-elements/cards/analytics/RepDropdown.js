// ** React Imports
import { useEffect, useState } from 'react'

// ** Third Party Components
import axios from 'axios'
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
  UncontrolledButtonDropdown
} from 'reactstrap'

const RepDropdown = props => {
  // ** State
  const [data, setData] = useState(null)

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
          <div>
            <Button color='primary' outline onClick={() => setScrollInnerModal(!scrollInnerModal)}>
              Scrolling Content Inside Modal
            </Button>
            <Modal scrollable isOpen={scrollInnerModal} toggle={() => setScrollInnerModal(!scrollInnerModal)}>
              <ModalHeader toggle={() => setScrollInnerModal(!scrollInnerModal)}>Modal Title</ModalHeader>
              <ModalBody>
                <p>
                  Biscuit powder jelly beans. Lollipop candy canes croissant icing chocolate cake. Cake fruitcake powder
                  pudding pastry.
                </p>
                <p>
                  Tootsie roll oat cake I love bear claw I love caramels caramels halvah chocolate bar. Cotton candy gummi
                  bears pudding pie apple pie cookie. Cheesecake jujubes lemon drops danish dessert I love caramels powder.
                </p>
                <p>
                  Chocolate cake icing tiramisu liquorice toffee donut sweet roll cake. Cupcake dessert icing dragée
                  dessert. Liquorice jujubes cake tart pie donut. Cotton candy candy canes lollipop liquorice chocolate
                  marzipan muffin pie liquorice.
                </p>
                <p>
                  Powder cookie jelly beans sugar plum ice cream. Candy canes I love powder sugar plum tiramisu. Liquorice
                  pudding chocolate cake cupcake topping biscuit. Lemon drops apple pie sesame snaps tootsie roll carrot
                  cake soufflé halvah. Biscuit powder jelly beans. Lollipop candy canes croissant icing chocolate cake. Cake
                  fruitcake powder pudding pastry.
                </p>
                <p>
                  Tootsie roll oat cake I love bear claw I love caramels caramels halvah chocolate bar. Cotton candy gummi
                  bears pudding pie apple pie cookie. Cheesecake jujubes lemon drops danish dessert I love caramels powder.
                </p>
                <p>
                  Chocolate cake icing tiramisu liquorice toffee donut sweet roll cake. Cupcake dessert icing dragée
                  dessert. Liquorice jujubes cake tart pie donut. Cotton candy candy canes lollipop liquorice chocolate
                  marzipan muffin pie liquorice.
                </p>
                <p>
                  Powder cookie jelly beans sugar plum ice cream. Candy canes I love powder sugar plum tiramisu. Liquorice
                  pudding chocolate cake cupcake topping biscuit. Lemon drops apple pie sesame snaps tootsie roll carrot
                  cake soufflé halvah. Biscuit powder jelly beans. Lollipop candy canes croissant icing chocolate cake. Cake
                  fruitcake powder pudding pastry.
                </p>
                <p>
                  Tootsie roll oat cake I love bear claw I love caramels caramels halvah chocolate bar. Cotton candy gummi
                  bears pudding pie apple pie cookie. Cheesecake jujubes lemon drops danish dessert I love caramels powder.
                </p>
                <p>
                  Chocolate cake icing tiramisu liquorice toffee donut sweet roll cake. Cupcake dessert icing dragée
                  dessert. Liquorice jujubes cake tart pie donut. Cotton candy candy canes lollipop liquorice chocolate
                  marzipan muffin pie liquorice.
                </p>
                <p>
                  Powder cookie jelly beans sugar plum ice cream. Candy canes I love powder sugar plum tiramisu. Liquorice
                  pudding chocolate cake cupcake topping biscuit. Lemon drops apple pie sesame snaps tootsie roll carrot
                  cake soufflé halvah. Biscuit powder jelly beans. Lollipop candy canes croissant icing chocolate cake. Cake
                  fruitcake powder pudding pastry.
                </p>
                <p>
                  Tootsie roll oat cake I love bear claw I love caramels caramels halvah chocolate bar. Cotton candy gummi
                  bears pudding pie apple pie cookie. Cheesecake jujubes lemon drops danish dessert I love caramels powder.
                </p>
                <p>
                  Chocolate cake icing tiramisu liquorice toffee donut sweet roll cake. Cupcake dessert icing dragée
                  dessert. Liquorice jujubes cake tart pie donut. Cotton candy candy canes lollipop liquorice chocolate
                  marzipan muffin pie liquorice.
                </p>
                <p>
                  Powder cookie jelly beans sugar plum ice cream. Candy canes I love powder sugar plum tiramisu. Liquorice
                  pudding chocolate cake cupcake topping biscuit. Lemon drops apple pie sesame snaps tootsie roll carrot
                  cake soufflé halvah.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color='primary' onClick={() => setScrollInnerModal(!scrollInnerModal)}>
                  Accept
                </Button>
              </ModalFooter>
            </Modal>
          </div>
          <Col lg="4" md="12">
            <tavg></tavg>
          </Col>
        </Col>
        {/* <Col className="budget-wrapper" md="4" xs="12">
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
        </Col> */}
      </Row>
    </Card>
  ) : null
}

export default RepDropdown
