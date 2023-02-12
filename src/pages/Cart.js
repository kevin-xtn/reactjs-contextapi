import React from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap';
import { useContext } from 'react';
import CartContext from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {

    const { products, removeFromCart } = useContext(CartContext);

    return (
        <section className="blk-spacing">
            <Container>
                <Row>
                    <Col>
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                        <td>
                                            <button className="btn btn-danger" onClick={() => removeFromCart(item)}>Remove</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3 style={{ color: 'white' }}>Total: {products.reduce((total, item) => total + item.price, 0)}</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="blk-spacing askQuote">
                            <Link to="/contact" className="btn btn-primary">Ask for a quote</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Cart