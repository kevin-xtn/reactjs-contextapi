import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useContext } from 'react';
import CartContext from '../context/CartContext';

const Contact = () => {

    const { products } = useContext(CartContext);
    return (
        <section className="blk-spacing form">
            <Container>
                <Row>
                    <Col>
                        <h3>Get a quote</h3>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formSummary">
                                <Form.Label>Quote details : </Form.Label>
                                <Form.Text className="text-muted">
                                    <ul>
                                        {products.map((item) => (
                                            <li key={item.id}>{item.name} - ${item.price}</li>
                                        ))}
                                    </ul>
                                </Form.Text>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact