


var React = require('react');
var BitcoinPaymentURLPanel = require('./BitcoinPaymentURLPanel');
var BitcoinPanel = require('./BitcoinPanel');
var BitcoinProtocolHandlerPanel = require('./BitcoinProtocolHandlerPanel');
var ShapeShiftPanel = require('./ShapeShiftPanel');
var CoinbasePanel = require('./Coinbase/CoinbasePanel');

var PaymentOptions = React.createClass({
  getInitialState() {
    return { panel: null }
  },
  setPanel(panel) {
    this.setState({ panel: panel })
  },
  render() {
    if(this.state.panel != null) {
      return (
        <div>
          <a className="list-group-item" onClick={() => this.setPanel(null)}>Choose other payment method</a>
          {this.state.panel({ request: this.props.request })}
        </div>
      );
    } else {
      return (
        <div>
          <div className="list-group-item">Choose your payment type</div>
          <a className="list-group-item" onClick={() => this.setPanel(React.createFactory(BitcoinPanel))}>Bitcoin Address</a>
          <a className="list-group-item" onClick={() => this.setPanel(React.createFactory(CoinbasePanel))}>Coinbase</a>
          <a className="list-group-item" onClick={() => this.setPanel(React.createFactory(ShapeShiftPanel))}>ShapeShift Litecoin</a>
        </div>
      )
    }
	}
});

module.exports = PaymentOptions;
