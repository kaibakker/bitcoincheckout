var React = require("react");


var CardHeader = require(".././CardHeader");

var IdealPanel = React.createClass({
    handler_url() {
        return "https://www.coinbase.com/handler?u=" + encodeURIComponent(this.props.request.bitcoinURI);
    },
    render(){
        return (
			<div className="panel panel-default panel-checkout">
        <CardHeader title='Pay with iDEAL' app={ this.props.app } />

        <div className="list-group-item">
          <p className="">iDEAL is a online payment method for the Netherlands, we are stil looking for a company we can reference to to make this working</p>
        </div>
			</div>
        );
    }
});

module.exports = IdealPanel;
