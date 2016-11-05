var React = require('react');


var BitcoinPanel = require('./BitcoinPanel');
var ShapeShiftPanel = require('./Services/ShapeShiftPanel');
var CirclePanel = require('./Services/CirclePanel');
var CoinbasePanel = require('./Services/CoinbasePanel');
var TransactionStatusPanel = require('./TransactionStatusPanel');

var ListGroupItem = require('./ListGroupItem')

var IndexPanel = React.createClass({
  handleClick(panel) {
    return () => this.props.panelController.setPanel(panel)
  }
  render() {
    return (
      <div>
        <ListGroupItem onClick={handleClick(BitcoinPanel)} name='Bitcoin Address' />
        <ListGroupItem onClick={handleClick(CoinbasePanel)} name='Coinbase' redirect='coinbase.com' />
        <ListGroupItem onClick={handleClick(CirclePanel)} name='Circle' redirect='circle.com' />
        <ListGroupItem onClick={handleClick(ShapeShiftPanel)} name='ShapeShift' />
        <ListGroupItem onClick={handleClick(TransactionStatusPanel)} name='Status' />
      </div>
    )
	}
});

module.exports = IndexPanel;
