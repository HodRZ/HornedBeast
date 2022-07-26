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
    showModal = e => this.props.showModal
    handleClick = (id) => {
        this.setState({ clickCounter: this.state.clickCounter + 1 })
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
                        <Button variant="secondary" size="sm" value={this.state.animals._id} onClick={this.showModal()}>
                            Expand
                        </Button>{' '}
                    </Card.Footer>
                </Card>
            </div>
        )
    }
}

export default HornedBeast