var React = require('react');


var BitcoinPanel = require('./BitcoinPanel');
var ShapeShiftPanel = require('./Services/ShapeShiftPanel');
var CirclePanel = require('./Services/CirclePanel');
var CoinbasePanel = require('./Services/CoinbasePanel');

var ListGroupItem = require('./ListGroupItem')

var IndexPanel = React.createClass({
  render() {
    return (
      <div>
        <ListGroupItem onClick={() => this.props.panelController.setPanel(BitcoinPanel)} name='Bitcoin Address' />
        <ListGroupItem onClick={() => this.props.panelController.setPanel(CoinbasePanel)} name='Coinbase' redirect='coinbase.com' />
        <ListGroupItem onClick={() => this.props.panelController.setPanel(CirclePanel)} name='Circle' redirect='circle.com' />
        <ListGroupItem onClick={() => this.props.panelController.setPanel(ShapeShiftPanel)} name='ShapeShift' />
      </div>
    )
	}
});

module.exports = IndexPanel;
