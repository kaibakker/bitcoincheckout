var React = require('react');


var BitcoinProtocolHandlerPanel = require('./BitcoinProtocolHandlerPanel');
var SharePanel = require('./SharePanel');
var CompletePanel = require('./CompletePanel');
var IdealPanel = require('./IdealPanel');


var ListGroupItem = require('.././ListGroupItem')

var DevelopmentPanel = React.createClass({
  selectPanelHandler(panel) {
    return () => this.props.app.setPanel(panel)
  },
  render() {
    if(this.props.request.network == 'testnet') {
      return (
        <div className="card">
          <div className="card-header">Under development</div>
          <ListGroupItem onClick={this.selectPanelHandler(CompletePanel)} name='Test completion' />
          <ListGroupItem onClick={this.selectPanelHandler(BitcoinProtocolHandlerPanel)} name='Bitcoin Payment Handler' />
          <ListGroupItem onClick={this.selectPanelHandler(SharePanel)} name='Ask someone else to pay' />

          <ListGroupItem onClick={this.selectPanelHandler(IdealPanel)} name='iDEAL' image='assets/images/ideal.gif' />
        </div>
      )
    } else {
      return (<div />)
    }
	}
});

module.exports = DevelopmentPanel;
