var React = require('react');

var BitcoinProtocolHandlerPanel = React.createClass({
  registerProtocolHandler() {
    navigator.registerProtocolHandler("bitcoin",
      "https://kaibakker.github.io/viabitcoin/index.html?%s",
      "Bitcoin handler");
  },
  render(){
		return (
			<section className="col-xs-12 col-md-6 col-md-offset-3 current-location">
        <a onClick={this.registerProtocolHandler}>Register protocol handler</a>
			</section>
		);
	}
});

module.exports = BitcoinProtocolHandlerPanel;
