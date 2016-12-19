var React = require("react");
import { Link } from 'react-router'

var octicons = require("octicons");

var CardHeader = React.createClass({
    render () {
        return (
            <div className="panel-heading">
                <Link className='backbutton' to="/checkout">
                    { "" && <span dangerouslySetInnerHTML={ { __html: octicons["chevron-left"].toSVG() } } />}
                    back
                </Link>
                <div className='text-center'>{ this.props.title }</div>
            </div>
        );
    }
});

module.exports = CardHeader;
