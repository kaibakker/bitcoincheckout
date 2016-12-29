var React = require("react");


import makeRequestFromProtocolURI from "utils/get-request-object";


var ListGroupItem = require("./../ListGroupItem");


export default function IndexPanel(props) {
    return (
        <div className="panel panel-default panel-checkout">
            <div className="panel-heading">Choose your payment type</div>
            <ListGroupItem to='checkout/bitcoin_address' name='Bitcoin Address' image='/assets/images/bitcoin.png' />
            <ListGroupItem to='checkout/coinbase' name='Coinbase' image='/assets/images/coinbase.png' />
            <ListGroupItem to='checkout/shapeShift' name='ShapeShift' image='/assets/images/shapeshift.png' />
        </div>
    );
}
