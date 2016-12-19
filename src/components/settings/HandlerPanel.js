var React = require("react");

var CardHeader = require("./CardHeader");

var { bitcoinURI } = require("utils/request_helpers");

var HandlerPanel = React.createClass({
    registerProtocolHandler() {
        navigator.registerProtocolHandler("bitcoin", "index.html?%s", "Bitcoin handler");
    },
    render(){
        return (
            <div className="panel panel-default panel-checkout">
                <CardHeader title='Bitcoin payment URLs' />

                <div className="list-group-item">
                    <p>
                    You can set up Bitcoin Checkout to handle all bitcoin payment links on the internet.
                    </p>
                    <a onClick={this.registerProtocolHandler} href="#" className='btn btn-primary'>Add link handler to your browser</a>


                    <p>
                        Check yout protocol hanlder through one of the following payment link.
                    </p>

                </div>
                { this.props.request && <a href={ bitcoinURI(this.props.request) } className="list-group-item">
                    Redirect to current request though a bitcoin handler
                </a> }

                <a href="bitcoin:124xXJsB7NtjQ8VZEHuTb6aVjb6WjTGjyB?amount=0.03&message=reddit" className="list-group-item">
                    Send us a testnet bitcoin donation
                </a>
                <a href="bitcoin:124xXJsB7NtjQ8VZEHuTb6aVjb6WjTGjyB?amount=0.03&message=reddit" className="list-group-item">
                    Send us a bitcoin donation
                </a>
            </div>
        );
    }
});

module.exports = HandlerPanel;
