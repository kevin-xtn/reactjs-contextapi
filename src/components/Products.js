import React from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'
import { useContext } from 'react';
import CartContext from '../context/CartContext';

const Products = () => {

    const { addToCart } = useContext(CartContext);
    
    const items = [
        {
            id: 1,
            name: 'Mouse',
            price: 100
        },
        {
            id: 2,
            name: 'Keyboard',
            price: 200
        },
        {
            id: 3,
            name: 'Monitor',
            price: 300
        },
        {
            id: 4,
            name: 'CPU',
            price: 400
        },
        {
            id: 5,
            name: 'GPU',
            price: 500
        },
    ];

    return (
        <section className="blk-spacing">
            <Container>
                <Row>
                    <Col>
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.name}</td>
                                        <td> 
                                            <button className="btn btn-primary" onClick={() => addToCart(item)}>Add to cart</button>
                                        </td> 
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Products