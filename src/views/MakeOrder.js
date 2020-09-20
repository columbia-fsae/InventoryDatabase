/*!

=========================================================
* Black Dashboard React v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    FormGroup,
    Form,
    Input,
    Row,
    Col
} from "reactstrap";

class CreateLoan extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <>
                <div className="content">
                    <Row>
                        <Col md="12">
                            <Card>
                                <CardHeader>
                                  <h5 className="title">Make An Order</h5>
                                </CardHeader>
                                <CardBody>
                                    <Form action="/home/view">
                                        <Row>
                                            <Col className="pr-md-1" md="2">
                                                <FormGroup>
                                                    <label>Department*</label>
                                                    <Input
                                                        defaultValue=""
                                                        placeholder="i.e. ME"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col className="pr-md-1" md="4">
                                                <FormGroup>
                                                    <label>System Name</label>
                                                    <Input
                                                        defaultValue=""
                                                        placeholder="i.e. Fluids"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="pr-md-1" md="4">
                                                <FormGroup>
                                                    <label>Part Name*</label>
                                                    <Input
                                                        defaultValue=""
                                                        placeholder="i.e. Nylon Tube"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col className="pr-md-1" md="3">
                                                <FormGroup>
                                                    <label>Part/Catalog Number</label>
                                                    <Input
                                                        defaultValue=""
                                                        placeholder="i.e. 8628K58"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            
                                            <Col className="pr-md-1" md="4">
                                                <FormGroup>
                                                    <label>Retailer*</label>
                                                    <Input
                                                        defaultValue=""
                                                        placeholder="i.e. McMaster"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="pr-md-1" md="7">
                                                <FormGroup>
                                                    <label>Link</label>
                                                    <Input
                                                        defaultValue=""
                                                        placeholder="i.e. https://www.mcmaster.com/8628k58"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col className="pr-md-1" md="4">
                                                <FormGroup>
                                                    <label>Dimensions</label>
                                                    <Input
                                                        defaultValue=""
                                                        placeholder="i.e. 1/2in ID, 3/4in OD"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="pr-md-1" md="3">
                                                <FormGroup>
                                                    <label>Unit Price</label>
                                                    <Input
                                                        defaultValue=""
                                                        placeholder="i.e. 16.41"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col className="pl-md-1" md="2">
                                                <FormGroup>
                                                    <label>Quantity</label>
                                                    <Input
                                                        defaultValue=""
                                                        placeholder="i.e. 1"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col className="pr-md-1" md="3">
                                                <FormGroup>
                                                    <label>Shipping/Processing Fee</label>
                                                    <Input
                                                        defaultValue=""
                                                        placeholder=""
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="px-md-1" md="11">
                                                <FormGroup>
                                                    <label>Additional Notes</label>
                                                    <Input
                                                        defaultValue=""
                                                        placeholder="Other Notes"
                                                        type="textarea"
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>

  
                                    </Form>
                                </CardBody>
                                <CardFooter>
                                    <Button className="btn-fill" color="primary" type="submit">
                                        Submit
                                    </Button>
                                </CardFooter>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </>
        );
    }
}

export default CreateLoan;
