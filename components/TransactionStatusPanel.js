var React = require('react');


var IndexPanel = require('./IndexPanel');

var ListGroupItem = require('./ListGroupItem')

var TransactionStatusPanel = React.createClass({
  render() {
    return (
      <div>
        <ListGroupItem onClick={() => this.props.panelController.setPanel(IndexPanel)} name='Bitcoin Address' />
        {this.props.request.transactionsStatus}
      </div>
    )
	}
});

module.exports = TransactionStatusPanel;
