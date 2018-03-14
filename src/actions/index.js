import * as types from './actionTypes'

function url() {
  return 'www.url.com';
}

export function receiveCVR(json) {
  return {type: types.RECEIVE_CVR, data: json}
}

// https://code.likeagirl.io/tutorial-for-adding-redux-to-a-react-app-1a94cc1738e5
export function fetchCVR(cvr) {
  return dispatch => {
    return fetch(url(), {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'x-api-key': apiKey,
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(json => dispatch(receiveCVR(json)))
  }
}
