var React = require("react");
var octicons = require("octicons");

var CardHeader = React.createClass({
    render () {
        return (
      <div className="card-header">
        <span className='backbutton' onClick={() => this.props.app.goToIndex()}>
          { "" && <span dangerouslySetInnerHTML={ { __html: octicons["chevron-left"].toSVG() } } />}
          back
        </span>
        <div className='text-xs-center'>{ this.props.title }</div>
      </div>
        );
    }
});

module.exports = CardHeader;
