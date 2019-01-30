import React from 'react';
import MenuHandler from './menuHandler';

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        console.log('Home js');
        console.log(props);
    }

    handleHome() {
        console.log('Home click');
        this.props.history.push('/home');
    }

    handleCreditCard(e) {
        console.log('Credit card click');
        this.props.history.push('/credit-card');
    }

    handleAccountHistory() {
        console.log('Account history click');
        this.props.history.push('/account-history');
    }

    handleContact(e) {
        console.log('Contact click');
        this.props.history.push('/contact');
    }

    handleLogout() {
        console.log('Logout click');
        localStorage.clear();
        this.props.history.push('/login');
    }

    componentWillMount() {
        // console.log(this.props);
        console.log('Home component loaded');
    }

    menuList = {
        Menu: 'menu',
        CreditCard: 'creditCard',
        AccountHistory: 'accountHistory',
        Contact: 'contact'
    }

    render() {
        // console.log(this.props);
        return (
            <div className="vh-100 vw-100">

                <nav className="navbar navbar-expand-lg navbar-dark bg-primary h-auto">
                    <a className="navbar-brand" href="/home">My Ekki Account R$ 2.352,51</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarColor02">
                        <ul className="navbar-nav mr-auto">
                            <li className={ 'nav-item' + this.props.tag === this.menuList.Menu ? 'active' : '' }>
                                <button onClick={this.handleHome.bind(this)} className="nav-link btn" href="#">Home <span className="sr-only">(current)</span></button>
                            </li>
                            <li className={ 'nav-item' + this.props.tag === this.menuList.CreditCard ? 'active' : '' }>
                                <button onClick={this.handleCreditCard.bind(this)} className="nav-link btn" href="#">Credit Card</button>
                            </li>
                            <li className={ 'nav-item' + this.props.tag === this.menuList.AccountHistory ? 'active' : '' }>
                                <button onClick={this.handleAccountHistory.bind(this)} className="nav-link btn" href="#">Account History</button>
                            </li>
                            <li className={ 'nav-item' + this.props.tag === this.menuList.Contact ? 'active' : '' }>
                                <button onClick={this.handleContact.bind(this)} className="nav-link btn" href="#">Contact's</button>
                            </li>
                            <li>
                                <button type='button' onClick={this.handleLogout.bind(this)} className="nav-link btn btn-outline-info">Logout</button>
                            </li>
                        </ul>
                    </div>
                </nav>
                
                <main className="container text-center h-85 p-5 align-items-center">
                    <MenuHandler history={this.props.history} tag={this.props.tag} />
                </main>

                <footer className="container-fluid align-items-end text-center h-auto">

                    <span className="ml-auto">
                        Powered by 
                        <a href="https://tt.linkedin.com/in/alan-dos-santos-nunes-bernd-5662b974"> ADSNB</a>
                    </span>

                </footer>

            </div>
        )
    }
}