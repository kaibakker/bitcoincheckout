var React = require('react');

var QRCode = require('qrcode.react');

var BitcoinQRCodePanel = React.createClass({
  render() {
		return (
			<QRCode value={this.props.bitcoinURI} />
		)
	}
});

module.exports = BitcoinQRCodePanel;
