import React from 'react';
import { Link } from 'react-router-dom';
import Error from '../modal/error';
import * as Request from 'request';
export default class ContactEdit extends React.Component {


    constructor(props) {
        super(props);

        console.log(localStorage.getItem('loggedUser'));
        console.log(props);

        this.state = {
            name: '',
            contactEmail: '',
            favorite: '',
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
        console.log(this.state.favorite);
        this.setState({[event.target.name]: event.target.value, modal: false});
    }

    handleSubmit(e) {
        Request.post({
            url: 'http://localhost:3000/contact',
            headers: { 'token' : 123456 },
            form:
            {
                name: this.state.name,
                contactEmail: this.state.contactEmail,
                favorite: this.state.favorite,
                email: this.state.email
            }}, (error, response, body) => {
            if (response.statusCode === 200) {
                this.props.history.push('/contact');
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
                                    <h1>Contact</h1>
                                    <p className="text-muted">Create your contact</p>
                                    <div className="mb-3 input-group">
                                        <div className="input-group-prepend"><span className="input-group-text"><i className="fas fa-font"></i></span></div>
                                        <input onChange={this.handleChange} name="name" placeholder="Full name" autoComplete="fullname" type="text" className="form-control" />
                                    </div>
                                    <div className="mb-3 input-group">
                                        <div className="input-group-prepend"><span className="input-group-text"><i className="fas fa-user"></i></span></div>
                                        <input onChange={this.handleChange} name="contactEmail" placeholder="E-mail" autoComplete="email" type="text" className="form-control" />
                                    </div>
                                    <div className="custom-control custom-switch">
                                        <input onChange={this.handleChange} name="favorite" type="checkbox" className="custom-control-input" id="favorite"/>
                                        <label className="custom-control-label" htmlFor="favorite">Favorite</label>
                                    </div>
                                    <br />
                                    <button className="btn btn-success btn-block">Create</button>
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