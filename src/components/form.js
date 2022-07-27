import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class form extends Component {
    formSubmit = (e) => {
        e.preventDefault();
        this.props.filterSelect(e)
    }
    render() {
        return (
            <Form onSubmit={this.formSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="formSelect">Filter by number of Horns</Form.Label>
                    <Form.Select id="formSelect" >
                        <option value={0}>All Beasts</option>
                        <option value={1}>1 Horn</option>
                        <option value={2}>2 Horns</option>
                        <option value={3}>3 Horns</option>
                        <option value={100}>100 Horns</option>
                    </Form.Select>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        );
    }
}

export default form;