import React, { Component } from "react";

import App from "components/App";
import PaymentRequest from "../../../components/PaymentRequest"

export default class CheckoutView extends Component {
    render() {
        return (
            <div>
                <PaymentRequest request={ {amount: '0.03', address: 'xyz', label: 'test', network: 'bitcoin'} }/>

                { this.props.childeren }

            </div>
        );
    }
}
