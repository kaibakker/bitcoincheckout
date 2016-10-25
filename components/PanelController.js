var React = require('react');


var IndexPanel = require('./IndexPanel');
var ListGroupItem = require('./ListGroupItem')

var PanelController = React.createClass({
  getInitialState() {
    return { panel: null }
  },
  setPanel(panel) {
    this.setState({ panel: panel })
  },
  render() {
    if(this.state.panel != null) {
      return (
        <div>
          <a className="list-group-item" onClick={() => this.setPanel(React.createFactory(IndexPanel))}>Choose other payment method</a>
          {this.state.panel({ request: this.props.request })}

          <ListGroupItem onClick={() => this.setPanel(React.createFactory(IndexPanel))} name='Bitcoin Address' />
        </div>
      );
    } else {
      return (
        <div>
          <div className="list-group-item">Choose your payment type</div>

          <IndexPanel panelController={this} />
        </div>
      )
    }
	}
});

module.exports = PanelController;
