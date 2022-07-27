import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            animals: this.props.animalData,
            clickCounter: 0
        }
    }
    // showModal = (info) => this.props.showModal(this.props.animals)
    handleClick = (id) => {
        this.setState({ clickCounter: this.state.clickCounter + 1 })
    }
    modalClick = () => {
        this.props.showModal(this.props.animalData);
    }

    render() {
        return (
            <div key={this.state.animals._id}>
                <Card >
                    <Card.Img variant="top" src={this.state.animals.image_url} alt={this.state.animals.keyword} />
                    <Card.Body>
                        <Card.Title>{this.state.animals.title}</Card.Title>
                        <Card.Text>
                            {this.state.animals.description}

                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="primary" size="sm" onClick={this.handleClick}>
                            Favorite {this.state.clickCounter} ♥
                        </Button>{' '}
                        <Button variant="secondary" size="sm" value={this.state.animals._id} onClick={this.modalClick}>
                            Expand
                        </Button>
                        <span> Number of Horns: {this.state.animals.horns}</span>
                    </Card.Footer>
                </Card>
            </div>
        )
    }
}

export default HornedBeast