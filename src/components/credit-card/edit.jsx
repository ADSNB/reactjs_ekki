import React from 'react';
import * as Request from 'request';
import Error from '../modal/error';
import { Link } from 'react-router-dom';

export default class CreditCardEdit extends React.Component {

    constructor(props) {
        super(props);

        console.log(localStorage.getItem('loggedUser'));
        console.log(props);

        this.state = { 
            name: '',
            password: '',
            email: localStorage.getItem('loggedUser'),
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
        console.log('Login click');
        Request.post({
            url: 'http://localhost:3000/credit-card',
            headers: { 'token' : 123456 },
            form: 
            {
                email: this.state.email,
                name: this.state.name,
                password: this.state.password,
                passwordConfirmation: this.state.passwordConfirmation
            }}, (error, response, body) => {
            if (response.statusCode === 200) {
                this.props.history.push('/credit-card');
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
                                    <h1>Credit Card</h1>
                                    <p className="text-muted">Customize your credit card</p>
                                    <div className="mb-3 input-group">
                                        <div className="input-group-prepend"><span className="input-group-text"><i className="fas fa-font"></i></span></div>
                                        <input onChange={this.handleChange} name="name" placeholder="Full name" autoComplete="fullname" type="text" className="form-control" />
                                    </div>
                                    <div className="mb-3 input-group">
                                        <div className="input-group-prepend"><span className="input-group-text"><i className="fas fa-key"></i></span></div>
                                        <input onChange={this.handleChange} name="password" placeholder="Card password" autoComplete="new-password" type="password" className="form-control" />
                                    </div>
                                    <div className="mb-4 input-group">
                                        <div className="input-group-prepend"><span className="input-group-text"><i className="fas fa-key"></i></span></div>
                                        <input onChange={this.handleChange} name="passwordConfirmation" placeholder="Repeat card password" autoComplete="new-password" type="password" className="form-control" />
                                    </div>
                                    <button className="btn btn-success btn-block">Create</button>
                                    <Link to="/credit-card">
                                        <button tabIndex="-1" className="btn btn-primary mt-3 btn-block">Voltar</button>
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