var React = require("react");

var CardHeader = require(".././CardHeader");

var CirclePanel = React.createClass({
    handlerUrl() {
        return "https://www.circle.com/send?paymentURL=" + encodeURIComponent(this.props.request.bitcoinURI);
    },
    render(){
        return (
      <div className="card">
        <CardHeader title='Pay with Circle' app={ this.props.app } />

        <div className="list-group-item">
          <div className="m-x-auto qrcode">
            <img src='assets/images/circle.png' className="icon" />
          </div>
          <p className="">Circle provides an easy way to connect your bankaccount or creditcard to bitcoin</p>
          <div className="text-xs-right">
            <a href={this.handlerUrl()} className="btn btn-primary">send to Circle</a>
          </div>
        </div>
			</div>
        );
    }
});

module.exports = CirclePanel;
