


var React = require('react');
var BitcoinPaymentURLPanel = require('./BitcoinPaymentURLPanel');
var BitcoinQRCodePanel = require('./BitcoinQRCodePanel');
var BitcoinProtocolHandlerPanel = require('./BitcoinProtocolHandlerPanel');
var ShapeShiftPanel = require('./ShapeShiftPanel');
var CoinbasePanel = require('./CoinbasePanel');

var PaymentOptions = React.createClass({
  getInitialState() {
    return { option: null}
  },
  render() {
		return (
      <div className="list-group">
        <a href="#" className="list-group-item">Choose your payment type</a>
        <a href="#" className="list-group-item">Bitcoin Address</a>
        <a href="#" className="list-group-item">Coinbase</a>
        <a href="#" className="list-group-item">Copay</a>
        <a href="#" className="list-group-item">Blockchain.info</a>
        <a href="#" className="list-group-item">Shapeshift.io</a>
        <a href="#" className="list-group-item">iDeal</a>
      </div>
      /*<div>


        <BitcoinQRCodePanel request={this.props.request} />

        <BitcoinProtocolHandlerPanel request={this.props.request} />

        <ShapeShiftPanel request={this.props.request} />

        <CoinbasePanel request={this.props.request}/>
      </div>*/
		);
	}
});

module.exports = PaymentOptions;
