import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            animals: this.props.animal
        }
    }
    onClose = e => {
        // console.log(this.state)
        this.props.onClose && this.props.onClose(e);
    };
    static getDerivedStateFromProps(props) {
        return { animals: props.animal };
    }

    render() {
        if (!this.props.show) {
            return null;
        }
        return (
            <Card key={'M' + this.state.animals._id}>
                <Card.Img variant="top" src={this.state.animals.image_url} alt={this.state.animals.keyword} />
                <Card.Body>
                    <Card.Title>{this.state.animals.title}</Card.Title>
                    <Card.Text>
                        {this.state.animals.description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant="primary" size="sm" onClick={this.onClose} >
                        Close
                    </Button>{' '}
                </Card.Footer>
            </Card>
        )
    }
}
export default Modal


// <Button variant="primary" size="sm" onClick={this.onClose} >
// Close
// </Button>{' '}

// return (<div>
//     <div>{this.props.children}</div>
//     <div>
//         <button onClick={this.onClose}>
//             Close
//         </button>
//     </div>
// </div>)