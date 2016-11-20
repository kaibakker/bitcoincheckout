var React = require('react');
var ReactDOM = require('react-dom');

var reactredux = require('react-redux')
var redux = require('redux')
var todoApp = require('./reducers')


var App = require('./components/App');
var Builder = require('./components/Builder');

var Provider = reactredux.Provider

var store = redux.createStore(todoApp)
//
// ReactDOM.render(
//   <Provider store={}>
//     </App>
//   </Provider>,
//   document.getElementById('main')
// );




const render = () => {
  console.log(store.getState());
  ReactDOM.render(
    <App store={store} />,
    document.getElementById('main')
  );
}

render()
store.subscribe(render);

// import React from 'react'
// import { render } from 'react-dom'
// import { Provider } from 'react-redux'
// import { createStore } from 'redux'
// import todoApp from './reducers'
// import App from './components/App'
//
// let store = createStore(todoApp)
//
// render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
