import initialState from './initialState'
import { FETCH_CVR, RECEIVE_CVR } from '../actions/actionTypes'

export default function virkr(state = initialState, action) {
  let newState;

  switch (action.type) {
    case FETCH_CVR:
      console.log('FETCH_CVR')
      return action
    case RECEIVE_CVR:
      newState = action.data
      console.log('RECEIVE_CVR')
      return newState
    default:
      return state
  }
}
