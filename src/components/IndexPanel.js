var React = require("react");


var BitcoinPanel = require("./Panels/BitcoinPanel");
var ShapeShiftPanel = require("./Panels/ShapeShiftPanel");
var CirclePanel = require("./Panels/CirclePanel");
var CoinbasePanel = require("./Panels/CoinbasePanel");

var DevelopmentPanel = require("./Panels/DevelopmentPanel");




var ListGroupItem = require("./ListGroupItem");

var IndexPanel = React.createClass({
    selectPanelHandler(panel) {
        return () => this.props.app.setPanel(panel);
    },
    render() {
        return (
            <div>
                <div className="panel panel-default panel-checkout">
                <div className="panel-heading">Choose your payment type</div>
                <ListGroupItem onClick={this.selectPanelHandler(BitcoinPanel)} name='Bitcoin Address' image='/assets/images/bitcoin.png' />
                <ListGroupItem onClick={this.selectPanelHandler(CoinbasePanel)} name='Coinbase' image='/assets/images/coinbase.png' />
                <ListGroupItem onClick={this.selectPanelHandler(CirclePanel)} name='Circle' image='/assets/images/circle.png' />
                <ListGroupItem onClick={this.selectPanelHandler(ShapeShiftPanel)} name='ShapeShift' image='/assets/images/shapeshift.png' />
            </div>
        
            { this.props.request.network == "testnet" &&
                <DevelopmentPanel request={this.props.request} app={this.props.app}/>
            }
            </div>
        );
    }
});

module.exports = IndexPanel;
