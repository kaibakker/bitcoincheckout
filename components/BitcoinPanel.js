var React = require('react');

var QRCode = require('qrcode.react');

var BitcoinPanel = React.createClass({
  render() {
		return (
      <div className="">
        <div className="col-md-12">
					<div className="center-block">
	          <QRCode value={this.props.request.bitcoinURI} />
					</div>
        </div>
        <div className="col-md-12">
          Send exactly <code>{ this.props.request.amount }</code> to this address
          <code>{ this.props.request.address }</code>
        </div>
      </div>

    )
	}
});

module.exports = BitcoinPanel;
