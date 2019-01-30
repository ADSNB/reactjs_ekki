import React from 'react';
import { Link } from 'react-router-dom';
import Error from '../modal/error';
import * as Request from 'request';

export default class ContactTransfer extends React.Component {


    constructor(props) {
        super(props);

        console.log(localStorage.getItem('loggedUser'));
        console.log(props);

        this.state = { 
            email: localStorage.getItem('loggedUser'),
            contactEmail: localStorage.getItem('transferTo'),
            quantity: '',
            modal: false,
            tittle: '',
            description: [],
            error: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value, modal: false});
    }
    
    handleSubmit(e) {
        Request.post({
            url: 'http://localhost:3000/account-history',
            headers: { 'token' : 123456 },
            form: 
            {
                email: this.state.email,
                contactEmail: this.state.contactEmail,
                quantity: this.state.quantity
            }}, (error, response, body) => {
            if (response.statusCode === 200) {
                this.props.history.push('/account-history');
            } else {
                this.setState({    
                    modal: true,
                    tittle: `${response.statusCode} - ${response.statusMessage}`,
                    description: JSON.parse(body).Description,
                    error: error ? error : ''
                });
            }}
        );
        e.preventDefault();
    }

    render() {
        return (
            <div className="app flex-row align-items-center">
                <div className="container">
                    <div className="justify-content-center row">
                        <div className="col-md-7 vw-100">
                            <div className="mx-5 card">
                            <div className="p-4 card-body">
                                <form onSubmit={this.handleSubmit.bind(this)}>
                                    <h1>Money Transfer</h1>
                                    <p className="text-muted">Money Transfer</p>
                                    <div className="mb-3 input-group">
                                        <div className="input-group-prepend"><span className="input-group-text"><i className="fas fa-user"></i></span></div>
                                        <input onChange={this.handleChange} name="contactEmail" placeholder="E-mail" disabled autoComplete="email" type="text" className="form-control" value={this.state.contactEmail} />
                                    </div>
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text">$</span>
                                        </div>
                                        <input onChange={this.handleChange} name="quantity" type="text" class="form-control" aria-label="Amount (to the nearest dollar)" />
                                        <div class="input-group-append">
                                            <span class="input-group-text">,00</span>
                                        </div>
                                    </div>
                                    <br />
                                    <button className="btn btn-success btn-block">Transfer</button>
                                    <Link to="/contact">
                                        <button tabIndex="-1" className="btn btn-primary mt-3 btn-block">Back</button>
                                    </Link>
                                </form>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Error visible={this.state.modal} tittle={this.state.tittle} message={this.state.description} />
            </div>
        )
    }
}