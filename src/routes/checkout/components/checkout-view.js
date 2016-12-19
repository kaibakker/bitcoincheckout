import React, { Component } from "react";

import App from "components/App";
import PaymentRequest from "../../../components/PaymentRequest"

export default ({ children }) => {
    return (
        <div>
            <PaymentRequest />

            { children }

        </div>
    );
};
