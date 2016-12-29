var React = require("react");

var CardHeader = require(".././CardHeader");

var CompletePanel = React.createClass({
    render(){
        return (
            <div className="panel panel-default panel-checkout">
                <CardHeader title='Payment received' />

                <div className="list-group-item">
                    <p>Thanks for shoping with us</p>

                    <a href={ this.props.request.success_url } className="btn btn-info">
                        finish payment
                    </a>
                </div>
			</div>
        );
    }
});

module.exports = CompletePanel;
