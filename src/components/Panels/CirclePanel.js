var React = require("react");

var CardHeader = require(".././CardHeader");

var { bitcoinURI } = require("../../utils/request_helpers");

var CirclePanel = React.createClass({
    handlerUrl() {
        return "https://www.circle.com/send?paymentURL=" + encodeURIComponent(bitcoinURI(this.props.request));
    },
    render(){
        return (
            <div className="panel panel-default panel-checkout">
                <CardHeader title='Pay with Circle' app={ this.props.app } />

                <div className="list-group-item">
                    <div className="center-block qrcode">
                        <img src='assets/images/circle.png' className="icon" />
                    </div>
                    <p className="">Circle provides an easy way to connect your bankaccount or creditcard to bitcoin</p>
                    <div className="text-right">
                        <a href={this.handlerUrl()} className="btn btn-primary">send to Circle</a>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = CirclePanel;
