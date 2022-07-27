import React from "react"
// import data from "./data.json"
import HornedBeast from "./HornedBeast"
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


class Main extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         animalData: this.props.data
    //     }
    // }

    render() {
        return (
            <Row xs={1} md={3} className="g-4" key='11' >
                {
                    this.props.data.map(animal => {
                        return (

                            <Col>
                                <HornedBeast animalData={animal} showModal={this.props.showModal} />
                            </Col>

                        )
                    })
                }
            </Row >
        )
    }
}

export default Main