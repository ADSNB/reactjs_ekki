import React from 'react';
import Menu from './menu';
import CreditCard from '../credit-card/edit';
import AccountHistory from '../account/accountHistory';
import Contact from '../contact/edit';

export default class MenuHandler extends React.Component {
    
    components = {
        menu: Menu,
        creditCard: CreditCard,
        accountHistory: AccountHistory,
        contact: Contact
    };

    render() {
        const TagName = this.components[this.props.tag];
        return <TagName />
    }

}