var React = require('react');


var BitcoinPanel = require('./Panels/BitcoinPanel');
var ShapeShiftPanel = require('./Panels/ShapeShiftPanel');
var CirclePanel = require('./Panels/CirclePanel');
var CoinbasePanel = require('./Panels/CoinbasePanel');




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
      </div>

    )
	}
});

module.exports = IndexPanel;
