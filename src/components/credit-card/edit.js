import React from 'react';

export default class CreditCardEdit extends React.Component {
    render() {
        return (
            <div className="app flex-row align-items-center">
                <div className="container">
                    <div className="justify-content-center row">
                        <div className="col-md-7 vw-100">
                            <div className="mx-5 card">
                            <div className="p-4 card-body">
                                <form className="">
                                    <h1>Credit Card</h1>
                                    <p className="text-muted">Customize your credit card</p>
                                    <div className="mb-3 input-group">
                                        <div className="input-group-prepend"><span className="input-group-text"><i className="fas fa-font"></i></span></div>
                                        <input placeholder="Full name" autoComplete="fullname" type="text" className="form-control" />
                                    </div>
                                    <div className="mb-3 input-group">
                                        <div className="input-group-prepend"><span className="input-group-text"><i className="fas fa-key"></i></span></div>
                                        <input placeholder="Card password" autoComplete="new-password" type="password" className="form-control" />
                                    </div>
                                    <div className="mb-4 input-group">
                                        <div className="input-group-prepend"><span className="input-group-text"><i className="fas fa-key"></i></span></div>
                                        <input placeholder="Repeat card password" autoComplete="new-password" type="password" className="form-control" />
                                    </div>
                                    <button className="btn btn-success btn-block">Create</button>
                                </form>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}