import React from 'react';
import { Table } from 'reactstrap';
import * as Request from 'request';
import { Link } from 'react-router-dom';

export default class CreditCardList extends React.Component {
    constructor(props) {
        super(props);

        console.log(localStorage.getItem('loggedUser'));

        this.state = { 
            email: localStorage.getItem('loggedUser'),
            password: '',
            cardList: [],
            modal: false,
            tittle: '',
            description: [],
            error: ''
        };

        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        this.refreshCardList();
    }

    refreshCardList() {
        var options = {
            url: `http://localhost:3000/credit-card?email=${this.state.email}`,
            headers: { 'token' : 123456 }
        };

        Request(options, (error, response, body) => {
            if (response.statusCode === 200) {
                this.setState({
                    cardList: JSON.parse(body)
                });
            } else {
                this.setState({    
                    modal: true,
                    tittle: `${response.statusCode} - ${response.statusMessage}`,
                    description: JSON.parse(body).Description,
                    error: error ? error : ''
                });
            }
        });
    }

    handleDelete(e) {
        var options = {
            url: `http://localhost:3000/credit-card?number=${e}`,
            headers: { 'token' : 123456 }
        };

        Request.delete(options, (error, response, body) => {
            if (response.statusCode === 200) {
                this.refreshCardList();
            } else {
                console.log(response.statusCode);
                this.setState({    
                    modal: true,
                    tittle: `${response.statusCode} - ${response.statusMessage}`,
                    description: JSON.parse(body).Description,
                    error: error ? error : ''
                });
            }
        });
    }
    
    render() {
        return (
            <div>
                <div>
                    My credit-cards
                </div>
                <div>
                    <Link to="/credit-card/edit">
                        <button tabIndex="-1" className="mt-3 btn btn-primary active">Add Card</button>
                    </Link>
                </div>
                <br />
                <Table responsive striped>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Number</th>
                            <th>Name</th>
                            <th>Security Code</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.cardList.map((card, index) => (
                            <React.Fragment key={index+1}>
                                <tr>
                                    <th scope="row">{index+1}</th>
                                    <td>{card.number}</td>
                                    <td>{card.name}</td>
                                    <td>{card.securityCode}</td>
                                    <td>
                                        <button onClick={this.handleDelete.bind(this, card.number)} id={index} name={index} type="button" className="btn btn-danger"><i className="fas fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            </React.Fragment>
                        ))}
                    </tbody>
                </Table>
            </div>
        )
    }
}