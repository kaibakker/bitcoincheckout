


var React = require('react');
var BitcoinPaymentURLPanel = require('./BitcoinPaymentURLPanel');
var BitcoinPanel = require('./BitcoinPanel');
var BitcoinProtocolHandlerPanel = require('./BitcoinProtocolHandlerPanel');
var ShapeShiftPanel = require('./ShapeShiftPanel');
var CirclePanel = require('./Coinbase/CirclePanel');
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
          <a className="col-xs-12 list-item" onClick={() => this.setPanel(null)}>Choose other payment method</a>
          {this.state.panel({ request: this.props.request })}
        </div>
      );
    } else {
      return (
        <div>
          <div className="col-xs-12 list-item">Choose your payment type</div>
          <a className="col-xs-12 list-item" onClick={() => this.setPanel(React.createFactory(BitcoinPanel))}>
            Bitcoin Address
          </a>

          <a className="col-xs-12 list-item" onClick={() => this.setPanel(React.createFactory(CoinbasePanel))}>Coinbase<span className="pull-xs-right">redirect to coinbase.com</span></a>
          <a className="col-xs-12 list-item" onClick={() => this.setPanel(React.createFactory(CirclePanel))}>Circle<span className="pull-xs-right">redirect to circle.com</span></a>
          <a className="col-xs-12 list-item" onClick={() => this.setPanel(React.createFactory(ShapeShiftPanel))}>ShapeShift Litecoin<span className="pull-xs-right">redirect to shapeshift.io</span></a>
          <a className="col-xs-12 list-item" onClick={() => this.setPanel(React.createFactory(BitcoinPaymentURLPanel))}>Bitcoin Payment handler</a>

        </div>
      )
    }
	}
});

module.exports = PaymentOptions;
