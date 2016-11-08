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

          { this.props.request && <a href={ this.props.request.bitcoinURI }>Redirect to current request though a bitcoin handler</a>}
  			</div>
      </div>
		);
	}
});

module.exports = BitcoinProtocolHandlerPanel;
