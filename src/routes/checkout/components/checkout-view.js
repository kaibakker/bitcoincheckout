import React, { Component } from "react";

import PaymentRequest from "components/checkout/PaymentRequest"

export default ({ children }) => {
    return (
        <div>
            <PaymentRequest />

            { children }
        </div>
    );
};
