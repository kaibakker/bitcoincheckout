import React, { Component } from "react";

import App from "components/App";

import BitcoinPanel from "components/Panels/BitcoinPanel";

import getRequestObject from 'utils/get-request-object'

export default class BitcoinAddressView extends Component {
    render() {
        return (
            <div>
                <BitcoinPanel request={getRequestObject()} />
            </div>
        );
    }
}
