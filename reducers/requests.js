const request = (state, action) => {
  if(state == undefined) {
    state = {
      request: {
        label: 'hoi',
        amount: 0.01,
        address: '124xXJsB7NtjQ8VZEHuTb6aVjb6WjTGjyB',
        redirect_to_cancel: 'no_redirect',
        redirect_to_success: 'no_redirect'
      }
    }
  }

  switch (action.type) {
    case 'NEW_REQUEST':
      if(action.address == undefined || action.amount == undefined) {
        return state
      }
      request = {
        id: action.id,
        label: action.label,
        amount: action.amount,
        address: action.address,
        bitcoinURI: 'bitcoin:' + action.address + '?amount=' + action.amount + '&label=' + action.label,
        redirect_to_cancel: action.redirect_to_cancel,
        redirect_to_success: action.redirect_to_success
      }
      return Object.assign({}, state, {
        request: request
      });
    case 'SET_PANEL_NAME':
      return Object.assign({}, state, {
        panel_name: action.panel_name
      });
    case 'SET_STATUS':
      return Object.assign({}, state, {
        status: action.status
      });
    default:
      return state
  }
}

// const requests = (state = [], action) => {
//   switch (action.type) {
//     case 'NEW_REQUEST':
//       return [
//         request(undefined, action)
//       ]
//     case 'SET_STATUS':
//       return state.map(t =>
//         request(t, action)
//       )
//     default:
//       return state
//   }
// }

module.exports = request;
