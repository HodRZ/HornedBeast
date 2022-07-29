import React, { Component } from 'react';

class HornedBeast extends Component {
    render() {
        console.log(this.props)
        return (
            <div key={this.props.animal._id} className={this.props.animal.horns} >
                <img alt={this.props.animal.keyword} src={this.props.animal.image_url} title={this.props.animal.title}></img>
                <h2>{this.props.animal.title}</h2>
                <p>
                    {this.props.animal.description}
                </p>
            </div >
        );
    }
}

export default HornedBeast;