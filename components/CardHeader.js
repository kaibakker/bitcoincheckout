var React = require('react');


var CardHeader = React.createClass({
  render () {
    return (
      <div className="card-header">
        <span className='pull-xs-left' onClick={() => this.props.app.goToIndex()}>back</span>
        <div className='text-xs-center'>{ this.props.title }</div>

      </div>
    )
  }
});

module.exports = CardHeader;
