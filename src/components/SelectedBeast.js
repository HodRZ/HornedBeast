import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Image } from "react-bootstrap";

class MyModal extends React.Component {
    render() {
        return (
            <Modal show={this.props.show}
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {this.props.selectedAnimal.name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image src={this.props.selectedAnimal.image_url} alt={this.props.selectedAnimal.name} fluid />
                    <p>
                        {this.props.selectedAnimal.description}
                    </p>
                    <p>Number of Horns:{this.props.selectedAnimal.horns}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
export default MyModal