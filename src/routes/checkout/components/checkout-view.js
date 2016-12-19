import React, { Component } from "react";

import App from "components/App";
import PaymentRequest from "../../../components/PaymentRequest";

import getRequestObject from "utils/get-request-object"

export default class CheckoutView extends Component {
    render() {
        return (
            <div>
                <PaymentRequest request={ getRequestObject() }/>

                { this.props.childeren }

            </div>
        );
    }
}
