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
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";

import {NavLink, Link} from "react-router-dom";

import firebase from 'firebase';

class Tables extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      transactions: [], 
      approved: 'any'
    };

    this.handleChange = this.handleChange.bind(this);
  }

  // drop down for filtering data based on Approved/not
  handleChange(event) {
    this.setState({approved: event.target.value});
    console.log(event.target.value);
    const db = firebase.firestore()

      if (event.target.value == "yes") {
        db.collection('orders').where("approved", "==", "Yes").get().then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        console.log(data);
        this.setState({ transactions: data});
        });
      } else if (event.target.value== "no") {
        db.collection('orders').where("approved", "==", "No").get().then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        console.log(data);
        this.setState({ transactions: data});
        });
      } else {
        db.collection('orders').get().then(querySnapshot => {
          const data = querySnapshot.docs.map(doc => doc.data());
          console.log(data);
          this.setState({ transactions: data});
          });
      }
  }

  componentDidMount() {
      const db = firebase.firestore()

      if (this.state.approved == "yes") {
        db.collection('orders').where("approved", "==", "Yes").get().then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        console.log(data);
        this.setState({ transactions: data});
        });
      } else if (this.state.approved == "no") {
        db.collection('orders').where("approved", "==", "No").get().then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        console.log(data);
        this.setState({ transactions: data});
        });
      } else {
        db.collection('orders').get().then(querySnapshot => {
          const data = querySnapshot.docs.map(doc => doc.data());
          console.log(data);
          this.setState({ transactions: data});
          });
      }
  }

  render() {
    const { transactions } = this.state;
    return (
        <div className="content">
          <form>
            <label>
            Approved: &nbsp;
            <select value={this.state.approved} onChange={this.handleChange}>
              <option value="any">Any</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </label>
          </form>
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                    <CardTitle tag="h4">Transactions</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter">
                    <thead className="text-primary">
                    <tr>
                      <th>
                        Date
                      </th>
                      <th>
                        Orderer
                      </th>
                      <th>
                        Department
                      </th>
                      <th>
                        Part Name
                      </th>
                      <th>
                        Link
                      </th>
                      <th>
                        Quantity
                      </th>
                      <th>
                        Total
                      </th>
                      <th>
                        Status
                      </th>
                      <th>
                        Picked Up
                      </th>
                     
                    </tr>
                    </thead>
                    <tbody>
                    {
                      transactions.map(order => (
                        <tr key={order.uid}> 
                          <td>{order.date}</td>
                          <td>{order.orderer}</td>
                          <td>{order.department}</td>
                          <td>{order.partname}</td>
                          <td><Link to={{ pathname: order.link }} target="_blank">{order.retailer}</Link></td>
                          <td>{order.quantity}</td>
                          <td>{Math.round(order.unitprice.replace('$', '')*order.quantity)}</td>
                          <td>{order.status}</td>
                          <td>{order.pickup}</td>
                        
                        </tr>
                       )
                      )
                    }
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
    );
  }
}


export default Tables;
