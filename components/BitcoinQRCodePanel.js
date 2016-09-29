var React = require('react');

var QRCode = require('qrcode.react');

var BitcoinQRCodePanel = React.createClass({
	uri() {
    return "bitcoin:" + this.props.request['address']
  },
  render() {
		if(this.props.request != null) {
			return (
				<section className="col-xs-12 col-md-6 col-md-offset-3 current-location">
					<QRCode value={this.uri()} />
				</section>
			)
		} else {
			return null
		}
	}
});

module.exports = BitcoinQRCodePanel;
