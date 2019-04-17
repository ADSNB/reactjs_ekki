import React from "react";
import { Table } from "reactstrap";
import * as Request from "request";
import { Link } from "react-router-dom";

export default class AccountHistory extends React.Component {
  constructor(props) {
    super(props);

    console.log(localStorage.getItem("loggedUser"));

    this.state = {
      email: localStorage.getItem("loggedUser"),
      historyList: [],
      modal: false,
      tittle: "",
      description: [],
      error: ""
    };
  }

  componentDidMount() {
    this.refreshHistoryList();
  }

  refreshHistoryList() {
    var options = {
      url: `http://localhost:3000/account-history?email=${this.state.email}`,
      headers: { token: 123456 }
    };

    Request(options, (error, response, body) => {
      if (response.statusCode === 200) {
        this.setState({
          historyList: JSON.parse(body)
        });
      } else {
        this.setState({
          modal: true,
          tittle: `${response.statusCode} - ${response.statusMessage}`,
          description: JSON.parse(body).Description,
          error: error ? error : ""
        });
      }
    });
  }

  render() {
    return (
      <div>
        <div>Account History</div>
        <br />
        <Table responsive striped>
          <thead>
            <tr>
              <th>#</th>
              <th>To / From</th>
              <th>Payment Type</th>
              <th>Quantity</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {this.state.historyList.map((history, index) => (
              <React.Fragment key={index + 1}>
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{history.contactEmail}</td>
                  <td>
                    <i
                      className={
                        history.cardNumber
                          ? "far fa-credit-card"
                          : "fas fa-coins"
                      }
                    />
                  </td>
                  <td>{history.quantity}</td>
                  <td>{history.date}</td>
                  <td>
                    <button
                      tabIndex="-1"
                      className={
                        history.status == 1
                          ? "btn btn-success active mr-3"
                          : "btn btn-danger active mr-3"
                      }
                    >
                      <i className="fas fa-dollar-sign" />
                    </button>
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
