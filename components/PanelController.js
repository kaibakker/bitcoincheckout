var React = require('react');


var IndexPanel = require('./IndexPanel');

var PanelController = React.createClass({
  getInitialState() {
    return { panel: IndexPanel }
  },
  setPanel(panel) {
    this.setState({ panel: panel })
  },
  goToIndex() {
    this.setPanel(IndexPanel)
  },
  setRequest(request) {
    this.props.app.setRequest(request)
  },
  render() {
    return React.createFactory(this.state.panel)({ request: this.props.request, panelController: this })
	}
});

module.exports = PanelController;
