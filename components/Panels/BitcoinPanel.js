var React = require('react');

var QRCode = require('qrcode.react');

var BitcoinPanel = React.createClass({
  render() {
		return (
      <div className="card">
        <div className="card-header">
          Pay with Bitcoin Address
          <span className="redirect" onClick={() => this.props.app.goToIndex()}>change</span>
        </div>

        <div className="list-group-item">
          <a href={this.props.request.bitcoinURI}>
            <div className="m-x-auto qrcode">
              <QRCode value={this.props.request.bitcoinURI} />
            </div>
          </a>

          <div className="text-sm-center">
            Send exactly <code>{ this.props.request.amount }</code> to this address <code>{ this.props.request.address }</code>
          </div>
        </div>
      </div>
    )
	}
});


module.exports = BitcoinPanel;
