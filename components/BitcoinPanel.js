var React = require('react');

var QRCode = require('qrcode.react');

var BitcoinPanel = React.createClass({
  render() {
		return (
      <div className="list-group-item">
        <div className="">
					<div className="m-x-auto qrcode">
	          <QRCode value={this.props.request.bitcoinURI} />
					</div>
        </div>
        <div className="text-sm-center">
          Send exactly <code>{ this.props.request.amount }</code> to this address
          <code> { this.props.request.address }</code>
        </div>
      </div>

    )
	}
});

module.exports = BitcoinPanel;
