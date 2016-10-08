var React = require('react');

var QRCode = require('qrcode.react');

var BitcoinPanel = React.createClass({
  render() {
		return (
      <div className="row">
        <div className="col-md-3">
          <QRCode value={this.props.request.bitcoinURI} />
        </div>
        <div className="col-md-9">
          Send exactly { this.props.request.amount } to this address
          { this.props.request.address }
        </div>
      </div>

    )
	}
});

module.exports = BitcoinPanel;
