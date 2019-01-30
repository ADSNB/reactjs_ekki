import React from 'react';
import { Link } from 'react-router-dom';
import * as Request from 'request';
import Error from '../modal/error';
export default class Register extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            modal: false,
            tittle: '',
            description: [],
            name: '',
            email: '',
            password: '',
            passwordConfirmation: ''
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
            url: 'http://localhost:3000/account',
            headers: { 'token' : 123456 },
            form: 
            {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                passwordConfirmation: this.state.passwordConfirmation
            }}, (error, response, body) => {
            if (response.statusCode === 200) {
                this.props.history.push('/login');
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

    handleAlreadyHaveAccount() {
        console.log('Already have account click');
    }

    componentWillMount() {
        console.log('Register component loaded');
    }

    render() {
        return(
            <div className="app flex-row align-items-center">
                <div className="container">
                    <div className="justify-content-center row">
                        <div className="col-md-7 vw-100">
                            <div className="mx-5 card">
                                <div className="p-4 card-body">
                                    <form onSubmit={this.handleSubmit.bind(this)}>
                                        <h1>Register</h1>
                                        <p className="text-muted">Create your account</p>
                                        <div className="mb-3 input-group">
                                            <div className="input-group-prepend"><span className="input-group-text"><i className="fas fa-ad"></i></span></div>
                                            <input onChange={this.handleChange} name="name" placeholder="Name" autoComplete="name" type="text" className="form-control" />
                                        </div>
                                        <div className="mb-3 input-group">
                                            <div className="input-group-prepend"><span className="input-group-text"><i className="fas fa-at"></i></span></div>
                                            <input onChange={this.handleChange} name="email" placeholder="E-mail" autoComplete="email" type="text" className="form-control" />
                                        </div>
                                        <div className="mb-3 input-group">
                                            <div className="input-group-prepend"><span className="input-group-text"><i className="fas fa-key"></i></span></div>
                                            <input onChange={this.handleChange} name="password" placeholder="Password" autoComplete="password" type="password" className="form-control" />
                                        </div>
                                        <div className="mb-4 input-group">
                                            <div className="input-group-prepend"><span className="input-group-text"><i className="fas fa-key"></i></span></div>
                                            <input onChange={this.handleChange} name="passwordConfirmation" placeholder="newPassword" autoComplete="newPassword" type="password" className="form-control" />
                                        </div>
                                        <button type="submit" className="btn btn-success btn-block">Create Account</button>
                                        <Link to="/login">
                                            <button onClick={this.handleAlreadyHaveAccount} tabIndex="-1" className="btn  btn-info btn-block mt-3">Already have an account?</button>
                                        </Link>
                                    </form>
                                </div>
                                {/* Footer para redes sociais =)
                                <div className="p-4 card-footer">
                                    <div className="row">
                                        <div className="col-12 col-sm-6"><button className="btn btn-primary  btn-block"><span>facebook</span></button></div>
                                        <div className="col-12 col-sm-6"><button className="btn btn-info btn-block"><span>twitter</span></button></div>
                                    </div>
                                </div>*/}
                            </div>
                        </div>
                    </div>
                </div>

                <Error visible={this.state.modal} tittle={this.state.tittle} message={this.state.description} />
            </div>
        )
    }
}