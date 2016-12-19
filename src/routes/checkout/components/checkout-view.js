import React, { Component } from "react";

import PaymentRequest from "../../../components/PaymentRequest"

export default ({ children }) => {
    return (
        <div>
            <PaymentRequest />

            { children }
        </div>
    );
};
