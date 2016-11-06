var React = require('react');


var IndexPanel = require('./IndexPanel');
var ListGroupItem = require('./ListGroupItem')

var PanelController = React.createClass({
  getInitialState() {
    return { panel: IndexPanel }
  },
  setPanel(panel) {
    console.log("RESET PANEL")
    console.log(panel)
    this.setState({ panel: panel })
  },
  setRequest(request) {
    this.props.app.setRequest(request)
  },
  render() {
    if(this.state.panel.displayName == "IndexPanel") {
      return (
        <div>
          {React.createFactory(this.state.panel)({ request: this.props.request, panelController: this })}
        </div>
      );
    } else {
      return (
        <div>
          <a className="" onClick={() => this.setPanel(IndexPanel)}>Other payment option</a>

          {React.createFactory(this.state.panel)({ request: this.props.request, panelController: this })}
        </div>
      );
    }
	}
});

module.exports = PanelController;
