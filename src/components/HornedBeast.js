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
   
    handleClick = (id) => {
        this.setState({ clickCounter: this.state.clickCounter + 1 })
    }

    render() {
        return (
                 <div key={this.state.animals._id}>
                      <Card >
                        <Card.Img variant="top" src={this.state.animals.image_url} alt={this.state.animals.keyword}/>
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
                            </Card.Footer>
                      </Card>
                    </div>
        )
    }
}

export default HornedBeast

// import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';

// function GridExample() {
//   return (
//     <Row xs={1} md={2} className="g-4">
//       {Array.from({ length: 4 }).map((_, idx) => (
//         <Col>
         
//         </Col>
//       ))}
//     </Row>
//   );
// }

// export default GridExample;


// return (
//     <div>
//         {this.state.animals.map(animal => {
//             return (<Card Key={animal._id}>
//                 <Card.Img variant="top" src={animal.image_url} alt={animal.keyword}/>
//                 <Card.Body>
//                   <Card.Title>{animal.title}</Card.Title>
//                   <Card.Text>
//                   {animal.description}
//                   </Card.Text>
//                 </Card.Body>
//                 <Card.Footer>
//                         <Button variant="primary" size="sm" onClick={this.handleClick}>
//                             Favorite {this.state.clickCounter} ♥
//                         </Button>{' '}
//                     </Card.Footer>
//               </Card>
//             )
//         })}
//     </div>
// )

// return (
//     <div>
//         {this.state.animals.map(animal => {
//             return (< Card Key={animal._id} >
//                 <Card.Img variant="top" src={animal.image_url} alt={animal.keyword} />
//                 <Card.Body>
//                     <Card.Title>{animal.title}</Card.Title>
//                     <Card.Text>
//                         {animal.description}
//                     </Card.Text>
//                 </Card.Body>
//                 <Card.Footer>
//                     <Button variant="primary" size="sm" onClick={this.handleClick}>
//                         Favorite {this.state.clickCounter} ♥
//                     </Button>{' '}
//                 </Card.Footer>
//             </Card >
//             )
//         })}
//     </div>
// )