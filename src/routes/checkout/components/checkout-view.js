import React, { Component } from "react";

import App from "components/App";
import PaymentRequest from "../../../components/PaymentRequest"

export default ({ children }) => {
    console.log("Children", children);

    return (
        <div>
            <PaymentRequest request={ {amount: '0.03', address: 'xyz', label: 'test', network: 'bitcoin'} }/>

            { children }

        </div>
    );
};
