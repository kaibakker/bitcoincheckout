var React = require('react');

var BitcoinProtocolHandlerPanel = React.createClass({
  registerProtocolHandler() {
    navigator.registerProtocolHandler("bitcoin",
      "index.html?%s",
      "Bitcoin handler");
  },
  render(){
		return (
			<div className="list-group-item">
        <a onClick={this.registerProtocolHandler}>Register protocol handler</a>
			</div>
		);
	}
});

module.exports = BitcoinProtocolHandlerPanel;
