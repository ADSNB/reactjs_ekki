import React from 'react';
import Menu from './menu';

export default class Home extends React.Component {

    handleHome() {
        console.log('Home click');
        this.props.history.push('/home');
    }

    handleCreditCard() {
        console.log('Credit card click');
        this.props.history.push('/credit-card');
    }

    handleAccountHistory() {
        console.log('Account history click');
        this.props.history.push('/account-history');
    }

    handleContact() {
        console.log('Contact click');
        this.props.history.push('/contact');
    }

    handleLogout() {
        console.log('Logout click');
        this.props.history.push('/login');
    }

    componentWillMount() {
        console.log('Home component loaded');
    }

    render() {
        return (
            <div className="vh-100 vw-100">

                <nav className="navbar navbar-expand-lg navbar-dark bg-primary h-auto">
                    <a className="navbar-brand" href="#">My Ekki Account R$ 2.352,51</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarColor02">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <button onClick={this.handleHome.bind(this)} className="nav-link btn" href="#">Home <span className="sr-only">(current)</span></button>
                            </li>
                            <li className="nav-item">
                                <button onClick={this.handleCreditCard.bind(this)} className="nav-link btn" href="#">Credit Card</button>
                            </li>
                            <li className="nav-item">
                                <button onClick={this.handleAccountHistory.bind(this)} className="nav-link btn" href="#">Account History</button>
                            </li>
                            <li className="nav-item">
                                <button onClick={this.handleContact.bind(this)} className="nav-link btn" href="#">Contact's</button>
                            </li>
                            <li>
                                <button type='button' onClick={this.handleLogout.bind(this)} className="nav-link btn btn-outline-info">Logout</button>
                            </li>
                        </ul>
                    </div>
                </nav>

                <main className="container text-center h-85 p-5 align-items-center">
                    
                    <Menu />
                    
                </main>

                <footer className="container-fluid align-items-end text-center h-auto">

                    <span className="ml-auto">
                        Powered by 
                        <a href="#"> ADSNB</a>
                    </span>

                </footer>

            </div>
        )
    }
}