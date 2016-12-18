var React = require("react");

var QRCode = require("qrcode.react");
var CardHeader = require(".././CardHeader");

var { bitcoinURI } = require("../../../utils/request_helpers");

var BitcoinPanel = React.createClass({
    render() {
        return (
      <div className="panel panel-default panel-checkout">
        <CardHeader title='Pay to Bitcoin Address' app={ this.props.app } />

        <div className="list-group-item">
          <a href={bitcoinURI(this.props.request)}>
            <div className="center-block qrcode">
              <QRCode value={bitcoinURI(this.props.request)} />
            </div>
          </a>

          <div className="text-center">
            Send exactly <code>{ this.props.request.amount }</code> to this address <code>{ this.props.request.address }</code>
          </div>
        </div>
      </div>
        );
    }
});


module.exports = BitcoinPanel;
