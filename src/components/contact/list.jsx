import React from 'react';
import { Table } from 'reactstrap';
import * as Request from 'request';
import { Link } from 'react-router-dom';

export default class ContactList extends React.Component {
    constructor(props) {
        super(props);

        console.log(localStorage.getItem('loggedUser'));

        this.state = { 
            email: localStorage.getItem('loggedUser'),
            password: '',
            contactList: [],
            modal: false,
            tittle: '',
            description: [],
            error: ''
        };

        this.handleDelete = this.handleDelete.bind(this);
        this.handleTransfer = this.handleTransfer.bind(this);
    }

    componentDidMount() {
        this.refreshContactList();
    }

    refreshContactList() {
        var options = {
            url: `http://localhost:3000/contact?email=${this.state.email}`,
            headers: { 'token' : 123456 }
        };

        Request(options, (error, response, body) => {
            if (response.statusCode === 200) {
                this.setState({
                    contactList: JSON.parse(body)
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
        console.log(e);
        var options = {
            url: `http://localhost:3000/contact?contactEmail=${e}&email=${this.state.email}`,
            headers: { 'token' : 123456 }
        };

        Request.delete(options, (error, response, body) => {
            if (response.statusCode === 200) {
                this.refreshContactList();
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
    
handleTransfer(e, contact) {
    localStorage.setItem('transferTo', e);
    this.props.history.push('/contact/transfer');
}

    render() {
        return (
            <div>
                <div>
                    My Contact List
                </div>
                <div>
                    <Link to="/contact/edit">
                        <button tabIndex="-1" className="mt-3 btn btn-primary active">ADD Contact</button>
                    </Link>
                </div>
                <br />
                <Table responsive striped>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>E-mail</th>
                            <th>Favorite</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.contactList.map((contact, index) => (
                            <React.Fragment key={index+1}>
                                <tr>
                                    <th scope="row">{index+1}</th>
                                    <td>{contact.name}</td>
                                    <td>{contact.contactEmail}</td>
                                    <td><i className={contact.favorite === 'on' ? 'far fa-heart' : ''} ></i>  </td>
                                    <td>
                                        <button onClick={this.handleTransfer.bind(this, contact.contactEmail)} tabIndex="-1" className="btn btn-success active mr-3"><i className="fas fa-dollar-sign"></i></button>
                                        <button onClick={this.handleDelete.bind(this, contact.contactEmail)} id={index} name={index} type="button" className="btn btn-danger"><i className="fas fa-trash"></i>
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