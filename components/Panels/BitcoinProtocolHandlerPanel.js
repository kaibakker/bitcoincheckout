var React = require('react');

var BitcoinProtocolHandlerPanel = React.createClass({
  registerProtocolHandler() {
    navigator.registerProtocolHandler("bitcoin", "index.html?%s", "Bitcoin handler");
  },
  render(){
		return (
      <div className="card">
        <div className="card-header">
          Set as bitcoin payment handler
          <span className="redirect" onClick={() => this.props.app.goToIndex()}>change</span>
        </div>

  			<div className="list-group-item">
          <p>
            Want to add bitcoincheckout.com to become your payment handler?
          </p>
          <a onClick={this.registerProtocolHandler} href="#" className='btn btn-primary'>Register protocol handler</a>


          <p>Check yout protocol hanlder through one of the following payment link.</p>
        </div>
        { this.props.request && <a href={ this.props.request.bitcoinURI } className="list-group-item">
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

module.exports = BitcoinProtocolHandlerPanel;
