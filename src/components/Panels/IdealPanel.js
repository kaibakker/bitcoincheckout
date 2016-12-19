var React = require("react");


var CardHeader = require(".././CardHeader");

import makeRequestFromProtocolURI from "utils/get-request-object";

var IdealPanel = React.createClass({
    handler_url() {
        var request = makeRequestFromProtocolURI()
        return "https://www.coinbase.com/handler?u=" + encodeURIComponent(bitcoinURI(request));
    },
    render(){
        return (
			<div className="panel panel-default panel-checkout">
                <CardHeader title='Pay with iDEAL' />

                <div className="list-group-item">
                    <p className="">iDEAL is a online payment method for the Netherlands, we are stil looking for a company we can reference to to make this working</p>
                </div>
			</div>
        );
    }
});

module.exports = IdealPanel;
