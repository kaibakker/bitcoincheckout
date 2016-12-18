import React, { Component } from "react";

import App from "components/App";

import BitcoinPanel from "components/Panels/BitcoinPanel"

export default class BitcoinAddressView extends Component {
    render() {
        return (
            <div>
                <BitcoinPanel request={ {amount: '0.03', address: 'xyz', label: 'test', network: 'bitcoin'} } />
            </div>
        );
    }
}
