var React = require('react');

var BitcoinPanel = require('./Panels/BitcoinPanel');
var ShapeShiftPanel = require('./Panels/ShapeShiftPanel');
var CirclePanel = require('./Panels/CirclePanel');
var CoinbasePanel = require('./Panels/CoinbasePanel');
var DevelopmentPanel = require('./Panels/DevelopmentPanel');



var PanelController = React.createClass({
  mapper() {
    return {
      "IndexPanel": BitcoinPanel
    }
  },
  render() {
    return React.createFactory(this.mapper("IndexPanel"))({
      app: this.props.app,
      request: this.props.request
    });
	}
});

module.exports = PanelController;
