var React = require("react");


var CardHeader = require(".././CardHeader");
var { bitcoinURI } = require("../../../utils/request_helpers");

var CoinbasePanel = React.createClass({
    handlerUrl() {
        return "https://www.coinbase.com/handler?u=" + encodeURIComponent(bitcoinURI(this.props.request));
    },
    render(){
        return (
			<div className="panel panel-checkout">
        <CardHeader title='Pay with Coinbase' app={ this.props.app } />

        <div className="list-group-item">
          <div className="m-x-auto qrcode">
            <img src='assets/images/coinbase.png' className="icon" />
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
