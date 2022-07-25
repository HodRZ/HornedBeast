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
    handleClick = () => {
        this.setState({ clickCounter: this.state.clickCounter + 1 })
    }

    render() {
        return (
            <div>
                {this.state.animals.map(animal => {
                    return (< Card Key={animal._id} >
                        <Card.Img variant="top" src={animal.image_url} alt={animal.keyword} />
                        <Card.Body>
                            <Card.Title>{animal.title}</Card.Title>
                            <Card.Text>
                                {animal.description}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="primary" size="sm" onClick={this.handleClick}>
                                Favorite {this.state.clickCounter} ♥
                            </Button>{' '}
                        </Card.Footer>
                    </Card >
                    )
                })}
            </div>
        )
    }
}

export default HornedBeast