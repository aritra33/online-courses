import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Col, Row } from 'react-bootstrap';
import './Course.css'

const Course = (props) => {
    return (
        <div className="card-item">
            <Card>
            <Card.Body>
            <Card.Title>{props.product.title}</Card.Title>
            <Card.Text>${props.product.price}</Card.Text>
                <Button 
                onClick ={() => props.handleAddProduct(props.product)}
                className="btn-all" variant="light"
                >
                Enroll Now
                </Button>
            </Card.Body>
            </Card>
        </div>
    );
};


export default Course;