var React = require("react");

var CardHeader = require(".././CardHeader");

var { bitcoinURI } = require("utils/request_helpers");

import makeRequestFromProtocolURI from "utils/get-request-object";

var SharePanel = React.createClass({
    handlerURL() {
        var request = makeRequestFromProtocolURI()
        return "https://kaibakker.github.io/bitcoincheckout/?u=" + encodeURIComponent(bitcoinURI(request));
    },
    render(){
        return (
			<div className="panel panel-default panel-checkout">
                <CardHeader title='Let someonelse pay' />

                <div className="list-group-item">
                    <p>Copy a permanent payment URL, the requested value will fluctutate over time as the amount of bitcoin requested is fixed</p>

                    <a href={ this.handlerURL() }>
                        send permanent request link
                    </a>

                </div>
			</div>
        );
    }
});

module.exports = SharePanel;
