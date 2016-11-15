var React = require('react');


var BitcoinPanel = require('./Panels/BitcoinPanel');
var ShapeShiftPanel = require('./Panels/ShapeShiftPanel');
var CirclePanel = require('./Panels/CirclePanel');
var CoinbasePanel = require('./Panels/CoinbasePanel');
var BitcoinProtocolHandlerPanel = require('./Panels/BitcoinProtocolHandlerPanel');
var SharePanel = require('./Panels/SharePanel');
var CompletePanel = require('./Panels/CompletePanel');

var IdealPanel = require('./Panels/IdealPanel');


var ListGroupItem = require('./ListGroupItem')

var IndexPanel = React.createClass({
  selectPanelHandler(panel) {
    return () => this.props.app.setPanel(panel)
  },
  render() {
    return (
      <div className="card">
        <div className="card-header">Choose your payment type</div>
        <ListGroupItem onClick={this.selectPanelHandler(BitcoinPanel)} name='Bitcoin Address' image='assets/images/bitcoin.png' />
        <ListGroupItem onClick={this.selectPanelHandler(CoinbasePanel)} name='Coinbase' image='assets/images/coinbase.png' />
        <ListGroupItem onClick={this.selectPanelHandler(CirclePanel)} name='Circle' image='assets/images/circle.png' />
        <ListGroupItem onClick={this.selectPanelHandler(ShapeShiftPanel)} name='ShapeShift' image='assets/images/shapeshift.png' />
        <ListGroupItem onClick={this.selectPanelHandler(CompletePanel)} name='Test completion' />
        
        <div className='development'>
          <div className="card-header">Under development</div>
          <ListGroupItem onClick={this.selectPanelHandler(BitcoinProtocolHandlerPanel)} name='Bitcoin Payment Handler' />
          <ListGroupItem onClick={this.selectPanelHandler(SharePanel)} name='Ask someone else to pay' />

          <ListGroupItem onClick={this.selectPanelHandler(IdealPanel)} name='iDEAL' image='assets/images/ideal.gif' />
        </div>
      </div>
    )
	}
});

module.exports = IndexPanel;
