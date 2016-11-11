var React = require('react');


var BitcoinPanel = require('./BitcoinPanel');
var ShapeShiftPanel = require('./ShapeShiftPanel');
var CirclePanel = require('./CirclePanel');
var CoinbasePanel = require('./CoinbasePanel');
var BitcoinProtocolHandlerPanel = require('./BitcoinProtocolHandlerPanel')

var ListGroupItem = require('.././ListGroupItem')

var IndexPanel = React.createClass({
  selectPanelHandler(panel) {
    return () => this.props.app.setPanel(panel)
  },
  render() {
    return (
      <div className="card">
        <div className="card-header">Choose your payment type</div>
        <ListGroupItem onClick={this.selectPanelHandler(BitcoinPanel)} name='Bitcoin Address' />
        <ListGroupItem onClick={this.selectPanelHandler(CoinbasePanel)} name='Coinbase' image='assets/images/coinbase.png'/>
        <ListGroupItem onClick={this.selectPanelHandler(CirclePanel)} name='Circle' />
        <ListGroupItem onClick={this.selectPanelHandler(ShapeShiftPanel)} name='ShapeShift' image='assets/images/shapeshift.png'/>
        <ListGroupItem onClick={this.selectPanelHandler(BitcoinProtocolHandlerPanel)} name='Bitcoin Payment Handler' />

      </div>
    )
	}
});

module.exports = IndexPanel;
