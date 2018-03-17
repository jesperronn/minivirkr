import React from 'react'

import Header from './components/Header'
import SearchBar from './components/SearchBar'
import Result from './components/Result'

import API from './API'

/**
 * The main application component
 */
export default class MiniVirkr extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      resultat: {},
      fejl: {}
    }

    this.searchCvr = this.searchCvr.bind(this)
  }

  searchCvr(term) {
    API.searchCvr(term)
    .then(
      (resultat) => this.setState({resultat: resultat, fejl: {}})),
      (fejl) => this.setState(resultat: {}, fejl: {})
  }

  render() {
    return (
      <div>
        <Header />
        <SearchBar submit={this.searchCvr}/>
        <Result resultat={this.state.resultat}/>
      </div>
    )
  }

}
