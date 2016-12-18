import React, { Component } from "react";

import Builder from "components/Builder";

import { Row, Col } from "react-bootstrap";

export default class CreateView extends Component {
    render() {
        return (
            <Row>
                <Col md={12}>
                    <Builder />
                </Col>
            </Row>
        );
    }
}