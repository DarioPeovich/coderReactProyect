import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const ItemListContainer = ({ saludo }) => {
    return (
        <div>    <Container>
            <Row className="align-items-center">
                <Col xs={12} className="text-center">
                    <h1>{saludo}</h1>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default ItemListContainer
