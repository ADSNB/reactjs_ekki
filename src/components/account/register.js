import React from 'react';
import { Link } from 'react-router-dom';

export default class Register extends React.Component {

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
                                <form className="">
                                    <h1>Register</h1>
                                    <p className="text-muted">Create your account</p>
                                    <div className="mb-3 input-group">
                                        <div className="input-group-prepend"><span className="input-group-text"><i className="fas fa-at"></i></span></div>
                                        <input placeholder="E-mail" autoComplete="email" type="text" className="form-control" />
                                    </div>
                                    <div className="mb-3 input-group">
                                        <div className="input-group-prepend"><span className="input-group-text"><i className="fas fa-user"></i></span></div>
                                        <input placeholder="Username" autoComplete="username" type="text" className="form-control" />
                                    </div>
                                    <div className="mb-3 input-group">
                                        <div className="input-group-prepend"><span className="input-group-text"><i className="fas fa-key"></i></span></div>
                                        <input placeholder="Password" autoComplete="new-password" type="password" className="form-control" />
                                    </div>
                                    <div className="mb-4 input-group">
                                        <div className="input-group-prepend"><span className="input-group-text"><i className="fas fa-key"></i></span></div>
                                        <input placeholder="Repeat password" autoComplete="new-password" type="password" className="form-control" />
                                    </div>
                                    <button className="btn btn-success btn-block">Create Account</button>
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
            </div>
        )
    }
}