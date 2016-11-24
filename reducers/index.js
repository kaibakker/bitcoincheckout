var redux = require('redux')
var request = require('./requests')
// import visibilityFilter from './visibilityFilter'

const todoApp = redux.combineReducers({
  request
  // visibilityFilter
})

module.exports = todoApp
