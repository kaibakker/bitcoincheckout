var React = require('react');

var QRCode = require('qrcode.react');

var BitcoinPanel = React.createClass({
  render() {
		return (
      <div className="list-group">
        <div className="list-group-item">
          Pay with Bitcoin Address
        </div>
        
        <div className="list-group-item">
          <a href={this.props.request.bitcoinURI}>
            <div className="m-x-auto qrcode">
              <QRCode value={this.props.request.bitcoinURI} />
            </div>
          </a>

          <div className="text-sm-center">
            Send exactly <code>{ this.props.request.amount }</code> to this address
            <code> { this.props.request.address }</code>
          </div>
        </div>
      </div>
    )
	}
});


module.exports = BitcoinPanel;
