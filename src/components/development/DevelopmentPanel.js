var React = require("react");


var ListGroupItem = require(".././ListGroupItem");

var DevelopmentPanel = React.createClass({
    render() {
        return (
            <div className="panel panel-default panel-checkout">
                <div className="panel-heading">Under development</div>
                <ListGroupItem to='/development/complete' name='Test completion' />
                <ListGroupItem to='/development/handler' name='Bitcoin Payment Handler' />
                <ListGroupItem to='/development/share' name='Ask someone else to pay' />

                <ListGroupItem to='/development/ideal' name='iDEAL' image='assets/images/ideal.gif' />
            </div>
        );
    }
});

module.exports = DevelopmentPanel;
