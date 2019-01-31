import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label
} from 'reactstrap';

class ProjectModal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            body: '',
            modal: true,
            projectName: this.props.name
        };
    }
    render() {
        return(
            <div>
                <Modal
                    isOpen={this.state.modal}
                    style={{marginTop: '100px'}}
                >
                    <ModalHeader>Yo</ModalHeader>
                    <ModalBody>
                    <Button 
                        color='dark'
                        style={{marginTop: '2rem', background: '#3897f0', marginLeft: '5px'}}
                        block
                        
                    >
                    Subscribe
                    </Button>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default ProjectModal;