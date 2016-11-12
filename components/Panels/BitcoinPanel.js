var React = require('react');

var QRCode = require('qrcode.react');
var CardHeader = require('.././CardHeader');

var BitcoinPanel = React.createClass({
  render() {
		return (
      <div className="card">
        <CardHeader title='Pay to Bitcoin Address' app={ this.props.app } />

        <div className="list-group-item">
          <a href={this.props.request.bitcoinURI}>
            <div className="m-x-auto qrcode">
              <QRCode value={this.props.request.bitcoinURI} />
            </div>
          </a>

          <div className="text-xs-center">
            Send exactly <code>{ this.props.request.amount }</code> to this address <code>{ this.props.request.address }</code>
          </div>
        </div>
      </div>
    )
	}
});


module.exports = BitcoinPanel;
