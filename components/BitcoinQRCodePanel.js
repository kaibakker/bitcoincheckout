var React = require('react');

var QRCode = require('qrcode.react');

var BitcoinQRCodePanel = React.createClass({
	uri() {
    return "bitcoin:" + this.props.request['address']
  },
  render() {
		if(this.props.request != null) {
			return (
				<QRCode value={this.uri()} />
			)
		} else {
			return null
		}
	}
});

module.exports = BitcoinQRCodePanel;
