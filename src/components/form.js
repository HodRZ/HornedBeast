import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reset: ''
        }
    }
    formSubmit = (e) => {
        e.preventDefault();
        this.props.filterSelect(e)
    }
    formReset = (e) => {
        this.props.reset()
        this.setState({
            value: ''
        })
        console.log(this.state)
    }
    render() {
        return (
            <Form onSubmit={this.formSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="formSelect">Filter by number of Horns</Form.Label>
                    <Form.Select id="formSelect" defaultValue={0} >
                        <option value={0}>All Beasts</option>
                        <option value={1}>1 Horn</option>
                        <option value={2}>2 Horns</option>
                        <option value={3}>3 Horns</option>
                        <option value={100}>100 Horns</option>
                    </Form.Select>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>{'   '}
                <Button variant="secondary" onClick={this.formReset}>
                    Reset
                </Button>
            </Form>
        );
    }
}

export default form;