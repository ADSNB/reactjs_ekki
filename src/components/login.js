import React from 'react';
import { Link } from 'react-router-dom';


export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            email: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
        this.validateForm();
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleSubmit(e) {
        console.log('Login click')
        e.preventDefault();
        // se o usuário autenticar
        this.props.history.push('/home', 'menu');
    }

    handleForgetPassword() {
        console.log('Forget password click');
    }

    handleRegisterNow() {
        console.log('Register now click');
    }

    componentWillMount() {
        console.log('Login component loaded');
    }

    render() {
        // console.log('login form rendered');
        return(
            <div className="app flex-row align-items-center">
                <div className="container">
                    <div className="justify-content-center row">
                        <div className="col-md-8">
                            <div className="card-group">
                            <div className="p-4 card">
                                <div className="card-body">
                                    <form onSubmit={this.handleSubmit.bind(this)}>
                                        <h1>Login</h1>

                                        <p className="text-muted">Sign In to your account</p>

                                        <div className="mb-3 input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <i className="far fa-user" />
                                                </span>
                                            </div>
                                            <input onChange={this.handleChange} name="email" placeholder="E-mail" autoComplete="E-mail" className="form-control" />
                                        </div>

                                        <div className="mb-4 input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <i className="fas fa-key" />
                                                </span>
                                            </div>
                                            <input onChange={this.handleChange} name="password" placeholder="Password" autoComplete="current-password" type="password" className="form-control" />
                                        </div>

                                        <div className="row">
                                            <div className="col-6">
                                                <button /*disabled={!this.validateForm()}*/ type="submit" className="px-4 btn btn-primary">Login</button>
                                            </div>
                                            <div className="text-right col-6">
                                                <button type='button' onClick={this.handleForgetPassword.bind(this)} className="px-0 btn btn-link">Forgot password?</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="text-white bg-primary py-5 d-md-down-none card" >
                                <div className="text-center card-body">
                                    <div>
                                        <h2>Sign up</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        <Link to="/register">
                                            <button onClick={this.handleRegisterNow} tabIndex="-1" className="mt-3 btn btn-primary active">Register Now!</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}