var React = require("react");

var CardHeader = require(".././CardHeader");

var { bitcoinURI } = require("../../../utils/request_helpers");

var SharePanel = React.createClass({
    handlerURL() {
        return "https://kaibakker.github.io/bitcoincheckout/?u=" + encodeURIComponent(bitcoinURI(this.props.app.request));
    },
    render(){
        return (
			<div className="panel panel-checkout">
        <CardHeader title='Let someonelse pay' app={ this.props.app } />

        <div className="list-group-item">
          <p>Copy a permanent payment URL, the requested value will fluctutate over time as the amount of bitcoin requested is fixed</p>

          <a href={ this.handlerURL() }>
            send permanent request link
          </a>

        </div>
			</div>
        );
    }
});

module.exports = SharePanel;
