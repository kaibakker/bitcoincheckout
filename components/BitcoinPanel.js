var React = require('react');

var QRCode = require('qrcode.react');

var BitcoinPanel = React.createClass({
  render() {
		return (
      <div className="list-group-item">
        <BitcoinQRCodePanel request={this.props.request} />

        <div className="text-sm-center">
          Send exactly <code>{ this.props.request.amount }</code> to this address
          <code> { this.props.request.address }</code>
        </div>
      </div>

    )
	}
});

var QRCode = require('qrcode.react');

var BitcoinQRCodePanel = React.createClass({
  render() {
		return (
      <a href={this.props.request.bitcoinURI}>
        <div className="m-x-auto qrcode">
          <QRCode value={this.props.request.bitcoinURI} />
        </div>
      </a>
		)
	}
});

module.exports = BitcoinQRCodePanel;

module.exports = BitcoinPanel;
