import React from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
const Contact = () => {
    return (
        <div className="container bg-light p-5 mb-5" id="contact">
            <div className="row">
            <h1>Contact Us</h1>
            <div className="col-md-2"></div>
            <div className="col-md-8">
            <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Your Name" />
    <Form.Label>Phone Number</Form.Label>
    <Form.Control type="email" placeholder="Phone Number" />
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter Your Email" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Text Here</Form.Label>
    <Form.Control as="textarea" rows={3} />
    <Button className="mt-4" variant="warning">Submit</Button>
  </Form.Group>
</Form>
            </div>
            <div className="col-md-2"></div>
            </div>
        </div>
    );
};

export default Contact;