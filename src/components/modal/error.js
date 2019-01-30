import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class Error extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            modal: false,
            tittle: '',
            description: this.props.message,
            error: ''
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    componentWillReceiveProps(props) {
        this.setState({
            modal: props.visible,
            tittle: props.tittle,
            description: props.message
        });
    }

    render() {
        return (
            <div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>{this.state.tittle}</ModalHeader>
                <ModalBody>
                    {this.props.message.map((desc, index) => (
                        <React.Fragment key={index}>
                            <p>{desc}</p>
                            <br />
                        </React.Fragment>
                    ))}
                    <br />
                    {this.state.error}
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={this.toggle}>Close</Button>
                </ModalFooter>
                </Modal>
            </div>
        )
    }
}