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
  },
  render() {
    return (
      <div className="list-group">
        <div className="list-group-item">Choose your payment type</div>
        <ListGroupItem onClick={this.handleClick(BitcoinPanel)} name='Bitcoin Address' />
        <ListGroupItem onClick={this.handleClick(CoinbasePanel)} name='Coinbase' redirect='coinbase.com' image='assets/images/coinbase.png'/>
        <ListGroupItem onClick={this.handleClick(CirclePanel)} name='Circle' redirect='circle.com' />
        <ListGroupItem onClick={this.handleClick(ShapeShiftPanel)} name='ShapeShift' image='assets/images/shapeshift.png'/>
        <ListGroupItem onClick={this.handleClick(TransactionStatusPanel)} name='Transaction Status' />
      </div>
    )
	}
});

module.exports = IndexPanel;
