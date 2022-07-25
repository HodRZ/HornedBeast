import React from "react"
import data from "./data.json"
import HornedBeast from "./HornedBeast"
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// import CardGroup from 'react-bootstrap/CardGroup';


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            animalData: data
        }
    }

    render() {
        return (
            <Row xs={1} md={3} className="g-4">
                {Array.from({ length: 1 }).map((_, idx) => (
                    <Col>
                        <HornedBeast animalData={this.state.animalData} />
                    </Col>
                ))}
            </Row>
        )
    }
}

export default Main

    // < Row xs = { 1} md = { 2} className = "g-4" >
    // {
    //     Array.from({ length: 4 }).map((_, idx) => (
    //         <Col>
    //             <HornedBeast animalData={this.state.animalData} />
    //         </Col>
    //     ))
    // }
    // </Row >



// {/* <CardGroup>
// <HornedBeast animalData={this.state.animalData} />
// </CardGroup> */}