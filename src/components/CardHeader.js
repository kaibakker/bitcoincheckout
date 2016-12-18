var React = require("react");
var octicons = require("octicons");

var CardHeader = React.createClass({
    render () {
        return (
      <div className="panel-heading">
        <span className='backbutton' onClick={() => this.props.app.goToIndex()}>
          { "" && <span dangerouslySetInnerHTML={ { __html: octicons["chevron-left"].toSVG() } } />}
          back
        </span>
        <div className='text-center'>{ this.props.title }</div>
      </div>
        );
    }
});

module.exports = CardHeader;
