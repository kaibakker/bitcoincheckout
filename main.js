var React = require('react');
var ReactDOM = require('react-dom')
var App = require('./components/App');
var Builder = require('./components/Builder');

ReactDOM.render(
  <App />,
  document.getElementById('main')
);

// ReactDOM.render(
//   <Builder />,
//   document.getElementById('builder')
// );
