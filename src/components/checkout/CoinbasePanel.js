var React = require("react");


var CardHeader = require(".././CardHeader");
var { bitcoinURI } = require("utils/request_helpers");

import makeRequestFromProtocolURI from "utils/get-request-object";

var CoinbasePanel = React.createClass({
    handlerUrl() {
        var request = makeRequestFromProtocolURI()
        return "https://www.coinbase.com/handler?u=" + encodeURIComponent(bitcoinURI(request));
    },
    render(){
        return (
			<div className="panel panel-default panel-checkout">
                <CardHeader title='Pay with Coinbase' />

                <div className="list-group-item">
                    <div className="center-block qrcode">
                        <img src='/assets/images/coinbase.png' className="icon" />
                    </div>
                    <p className="">Coinbase provides an easy way to connect your bankaccount or creditcard to bitcoin</p>
                    <div className="text-right">
                        <a href={this.handlerUrl()} className="btn btn-primary">send to Coinbase</a>
                    </div>
                </div>
			</div>
        );
    }
});

module.exports = CoinbasePanel;
