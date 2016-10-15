


var React = require('react');
var BitcoinPaymentURLPanel = require('./BitcoinPaymentURLPanel');
var BitcoinPanel = require('./BitcoinPanel');
var BitcoinProtocolHandlerPanel = require('./BitcoinProtocolHandlerPanel');
var ShapeShiftPanel = require('./Services/ShapeShiftPanel');
var CirclePanel = require('./Services/CirclePanel');
var CoinbasePanel = require('./Services/CoinbasePanel');
var ListGroupItem = require('./ListGroupItem')

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

          <ListGroupItem onClick={() => this.setPanel(React.createFactory(BitcoinPanel))} name='Bitcoin Address' />
          <ListGroupItem onClick={() => this.setPanel(React.createFactory(CoinbasePanel))} name='Coinbase' redirect='coinbase.com' />
          <ListGroupItem onClick={() => this.setPanel(React.createFactory(CirclePanel))} name='Circle' redirect='circle.com' />
          <ListGroupItem onClick={() => this.setPanel(React.createFactory(ShapeShiftPanel))} name='ShapeShift' />
          
        </div>
      )
    }
	}
});

module.exports = PaymentOptions;
