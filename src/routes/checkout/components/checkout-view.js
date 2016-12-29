import React, { Component } from "react";

import PaymentRequest from "components/checkout/PaymentRequest"

import CancelButton from "components/checkout/CancelButton"

export default ({ children }) => {
    return (
        <div>
            <PaymentRequest />

            { children }

            <CancelButton />
        </div>
    );
};
