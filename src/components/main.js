import React from "react"
import data from "./data.json"
import HornedBeast from "./HornedBeast"
import CardGroup from 'react-bootstrap/CardGroup';


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            animalData: data
        }
    }

    render() {
        return (
            <CardGroup>
                <HornedBeast animalData={this.state.animalData} />
            </CardGroup>
        )
    }
}

export default Main


