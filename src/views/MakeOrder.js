
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
import firebase from 'firebase';

// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Checkbox,
    FormGroup,
    Form,
    Input,
    Label,
    Row,
    Col
} from "reactstrap";

class CreateLoan extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            orderer: '',
            department: '',
            system: '',
            partname: '',
            retailer: '',
            link: '',
            dimensions: '',
            unitprice: '',
            quantity: '',
            fee: '',
            catalognumber: '',
            notes: '',
            approved: 'No',
            pickup: 'No',
            urgen: 0
        }
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    createOrder = e => {
        e.preventDefault();
        const db = firebase.firestore();
        const userRef =
        db.collection("orders").add({
            date: this.state.date,
            orderer: this.state.orderer,
            department: this.state.department,
            system: this.state.system,
            partname: this.state.partname,
            retailer: this.state.retailer,
            link: this.state.link,
            dimensions: this.state.dimensions,
            unitprice: this.state.unitprice,
            quantity: this.state.quantity,
            fee: this.state.fee,
            catalognumber: this.state.catalognumber,
            notes: this.state.notes,
            approved: 'No',
            pickup: 'No'
        })
        this.setState({
            date: '',
            orderer: '',
            department: '',
            system: '',
            partname: '',
            retailer: '',
            link: '',
            dimensions: '',
            unitprice: '',
            quantity: '',
            fee: '',
            catalognumber: '',
            notes: '',
            urgent: 0,
            approved: 'No',
            pickup: 'No',
        });
    };

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
                                    <Form onSubmit={this.createOrder} action="/home/view">
                                        <Row>
                                            <Col className="pr-md-1" md="2">
                                                <FormGroup>
                                                    <label>Date</label>
                                                    <Input
                                                        name = "date"
                                                        value={this.state.date}
                                                        onChange={this.onChange}
                                                        placeholder=""
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col className="pr-md-1" md="2">
                                                <FormGroup>
                                                    <label>Name</label>
                                                    <Input
                                                        name = "orderer"
                                                        value={this.state.orderer}
                                                        onChange={this.onChange}
                                                        placeholder="i.e. Jane Smith"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col className="pr-md-1" md="2">
                                                <FormGroup>
                                                    <label>Department*</label>
                                                    <Input
                                                        name = "department"
                                                        value={this.state.department}
                                                        onChange={this.onChange}
                                                        placeholder="i.e. ME"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col className="pr-md-1" md="4">
                                                <FormGroup>
                                                    <label>System Name</label>
                                                    <Input
                                                        name = "system"
                                                        value={this.state.system}
                                                        onChange={this.onChange}
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
                                                        name = "partname"
                                                        value={this.state.partname}
                                                        onChange={this.onChange}
                                                        placeholder="i.e. Nylon Tube"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col className="pr-md-1" md="3">
                                                <FormGroup>
                                                    <label>Part/Catalog Number</label>
                                                    <Input
                                                        name = "catalognumber"
                                                        value={this.state.catalognumber}
                                                        onChange={this.onChange}
                                                        placeholder="i.e. 8628K58"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            
                                            <Col className="pr-md-1" md="4">
                                                <FormGroup>
                                                    <label>Retailer*</label>
                                                    <Input
                                                        name = "retailer"
                                                        value={this.state.retailer}
                                                        onChange={this.onChange}
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
                                                        name = "link"
                                                        value={this.state.link}
                                                        onChange={this.onChange}
                                                        placeholder="i.e. https://www.mcmaster.com/8628k58"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col className="pr-md-1" md="4">
                                                <FormGroup>
                                                    <label>Dimensions</label>
                                                    <Input
                                                        name = "dimensions"
                                                        value={this.state.dimensions}
                                                        onChange={this.onChange}
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
                                                        name = "unitprice"
                                                        value={this.state.unitprice}
                                                        onChange={this.onChange}
                                                        placeholder="i.e. 16.41"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col className="pl-md-1" md="2">
                                                <FormGroup>
                                                    <label>Quantity</label>
                                                    <Input
                                                        name = "quantity"
                                                        value={this.state.quantity}
                                                        onChange={this.onChange}
                                                        placeholder="i.e. 1"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col className="pr-md-1" md="3">
                                                <FormGroup>
                                                    <label>Shipping/Processing Fee</label>
                                                    <Input
                                                        name = "fee"
                                                        value={this.state.fee}
                                                        onChange={this.onChange}
                                                        placeholder=""
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col className="pr-md-1" md="3">
                                                <FormGroup>
                                                    <label>Urgent &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                                                    <Input
                                                        name = "urgent"
                                                        value={this.state.urgent}
                                                        onChange={this.onChange}
                                                        placeholder=""
                                                        type="checkbox"
                                                    />
                                                </FormGroup> 
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="pr-md-1" md="11">
                                                <FormGroup>
                                                    <label>Additional Notes</label>
                                                    <Input
                                                        name = "notes"
                                                        value={this.state.notes}
                                                        onChange={this.onChange}
                                                        placeholder="Other Notes"
                                                        type="textarea"
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <CardFooter>
                                        <Button className="btn-fill" color="primary" type="submit">
                                            Submit
                                        </Button>
                                        </CardFooter>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </>
        );
    }
}

export default CreateLoan;

