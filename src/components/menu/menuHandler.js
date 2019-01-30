import React from 'react';
import Menu from './menu';
import CreditCardList from '../credit-card/list';
import CreditCardEdit from '../credit-card/edit';
import AccountHistory from '../account/accountHistory';
import Contact from '../contact/edit';
import ContactList from '../contact/list';
import ContactEdit from '../contact/edit';
import ContactTransfer from '../contact/transfer';

export default class MenuHandler extends React.Component {
    
    constructor(props) {
        super(props);
        console.log('menuhandler');
        console.log(props);
    }
    
    components = {
        menu: Menu,
        creditCardList: CreditCardList,
        creditCardEdit: CreditCardEdit,
        contactList: ContactList,
        contactEdit: ContactEdit,
        contactTransfer: ContactTransfer,
        accountHistory: AccountHistory,
        contact: Contact
    };

    render() {
        const TagName = this.components[this.props.tag];
        return <TagName history={this.props.history} />
    }

}