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

class Tables extends React.Component {

  constructor(props){
    super(props);
    this.getHeader = this.getHeader.bind(this);
    this.getRowsData = this.getRowsData.bind(this);
    this.getKeys = this.getKeys.bind(this);

    this.state = {
      transactions:[
        {
          "date": "07/21/2020",
          "orderer": "Jannie Zhong",
          "department": "ME",
          "system": "Steering",
          "partname": "Steering Rack",
          "catalognum": "B00-F7-001",
          "approved": "No",
          "pickup": "No"
        },
        {
          "date": "1/13/2020",
          "orderer": "Kat Chen",
          "department": "ME",
          "system": "Chassis",
          "partname": "Impact Attenuator Aluminum Honeycomb",
          "catalognum": "N/A",
          "approved": "Kat Chen",
          "pickup": "Denis Profka"
        },
        {
          "date": "12/2/2019",
          "orderer": "Denis Profka",
          "department": "ABC",
          "system": "Shop",
          "partname": "Swan M314 Isopropyl Alcohol, 99%",
          "catalognum": "B00NMPLSZ6",
          "approved": "Denis Profka",
          "pickup": "Andrew Chuka"
        }

      ]

    }

  }

  getKeys = function(){
    return Object.keys(this.state.transactions[0]);

  }
  getRowsData = function(){
    var items = this.state.transactions;
    var keys = this.getKeys();
    return items.map((row, index) => {
      return <tr key={index}><RenderRow key={index} data={row} keys={keys}/></tr>
    })
  }
  getHeader = function(){
    var keys = this.getKeys();
    return keys.map((key, index) => {
      return <th key={key}>{key.toUpperCase()}</th>
    })
  }


  render() {
    const transactionList = this.state.transactions;
    if (!transactionList){
      console.log("something is wrong!");
      return null;
    }
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
                    {/*{*/}
                    {/*  transactionList ? (*/}
                    {/*        <tr> {this.getHeader()} </tr>*/}
                    {/*    ) :null*/}
                    {/*}*/}
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
                      transactionList ? (
                          this.getRowsData()
                      ) : null
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

const RenderRow = (props) =>{
  return props.keys.map((key, index)=>{

    if (key == "company_name"){
      return <td key={props.data[key]}>
        <NavLink
            to={{
              pathname:"/admin/profile",
              state: {name: props.data[key]}
            }}
            className="nav-link"
            activeClassName="active"
        >
          {props.data[key]}
        </NavLink>

      </td>
    } else {
      return <td key={props.data[key]}>{props.data[key]}</td>
    }

  })
}


export default Tables;
