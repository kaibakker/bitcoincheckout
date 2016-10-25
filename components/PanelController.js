var React = require('react');


var IndexPanel = require('./IndexPanel');
var ListGroupItem = require('./ListGroupItem')

var PanelController = React.createClass({
  getInitialState() {
    return { panel: IndexPanel }
  },
  setPanel(panel) {
    this.setState({ panel: panel })
  },
  render() {
    if(this.state.panel.displayName == "IndexPanel") {
      return (
        <div>
          <div className="list-group-item">Choose your payment type</div>

          {React.createFactory(this.state.panel)({ request: this.props.request, panelController: this })}
        </div>
      );
    } else {
      return (
        <div>
          <ListGroupItem onClick={() => this.setPanel(IndexPanel)} name='Other payment option' />

          {React.createFactory(this.state.panel)({ request: this.props.request, panelController: this })}
        </div>
      );
    }
	}
});

module.exports = PanelController;
