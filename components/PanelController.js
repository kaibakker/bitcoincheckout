var React = require('react');


var PanelController = React.createClass({
  render() {
    return React.createFactory(this.props.panel)({
      app: this.props.app,
      request: this.props.request
    });
	}
});

module.exports = PanelController;
