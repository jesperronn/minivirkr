import React from 'react'

import Header from './components/Header'
import SearchBar from './components/SearchBar'
import Result from './components/Result'
import Error from './components/Error'

import {searchVirkr} from './API'

/**
 * The main application component
 */
export default class MiniVirkr extends React.Component {
  constructor(props) {
    super(props)

    this.state = this.defaultState
    this.searchCvr = this.searchCvr.bind(this)
  }

  // could not use setState call from constructor, so the `defaultState`
  // is now called from here
  defaultState = {
    resultat: {},
    fejl: {}
  }

  resetState = () => {
    this.setState(this.defaultState)
  }

  searchCvr(term) {
    searchVirkr(term)
    .then(resultat => this.setState({resultat: resultat, fejl: {}}))
    .catch(err => this.setState({resultat: {}, fejl: err}))
  }

  render() {
    return (
      <div>
        <Header reset={this.resetState} />
        <div className='container'>
          <SearchBar submit={this.searchCvr}/>
          <Result resultat={this.state.resultat}/>
          <Error error={this.state.fejl}/>
        </div>
      </div>
    )
  }

}
