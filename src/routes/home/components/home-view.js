import React, { Component } from "react";

import { Grid, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router";

export default class HomeView extends Component {
    render() {
        return (
            <Row>
                <Col md={12}>
                    <div className="info">
                        <h1>Easy bitcoin integration</h1>
                        <h2>We provide a great bitcoin checkout service, fully opensource</h2>
                        <h4>Customers</h4>
                        <p>We provide easy payments on the web, we accept different methods through different providers. With an beautiful and customer friendly interfase.</p>

                        <Button bsStyle="info" 
                                componentClass={Link}
                                to="/checkout?u=bitcoin:124xXJsB7NtjQ8VZEHuTb6aVjb6WjTGjyB?amount=0.03&label=Mastering Bitcoin&redirect_to_cancel=cancel.html&redirect_to_success=success.html">Go to Bitcoin Checkout</Button>

                        <h4>Merchants</h4>
                        <p>We provide an easy way of accepting bitcoin, just a link from your wallet is enough. While you allow customers to pay With a wide foraity of payments. And thus an extra way of making money.</p>

                        <h4>Developers</h4>
                        <p>Accepting bitcoin With X is as easy as adding a link. the full code base is opensource, hosted on github and ready for contributions.</p>

                        <Button bsStyle="info" 
                                componentClass={Link}
                                href="/checkout?u=testnet:mz5ydTb59nk3AMPrpVtDQi2WGy7F26b8aY?amount=0.03&label=Mastering Bitcoin&redirect_to_cancel=cancel.html&redirect_to_success=success.html">
                            Go through testnet checkout
                        </Button>
                    </div>
                </Col>
            </Row>
        );
    }
}