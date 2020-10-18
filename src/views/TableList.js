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

import {NavLink} from "react-router-dom";

import firebase from 'firebase';

import { db } from 'C:/Users/sanja/Desktop/InventoryDatabase-master/src/index';

class Tables extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      transactions: []
    };
  }

  componentDidMount() {
    db.collection('orders').get().then(querySnapshot => {
      const data = querySnapshot.docs.map(doc => doc.data());
      console.log(data);
      this.setState({ transactions: data});
    });
  }

  render() {
    const { transactions } = this.state;
    return (
     
        <div className="content">
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
                        System
                      </th>
                      <th>
                        Part Name
                      </th>
                      <th>
                        Catalog #
                      </th>
                      <th>
                        Approved
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
                          <td>{order.system}</td>
                          <td>{order.catalognumber}</td>
                          <td>{order.approved}</td>
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