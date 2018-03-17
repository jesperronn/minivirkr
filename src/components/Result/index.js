import React from 'react'
import _ from 'lodash'

export default class Result extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    // Nothing to show yet
    if (_.isEmpty(this.props.resultat)) {
      return null
    }

    const {virksomheder, deltagere} = this.props.resultat

    return (
      <div>
        {this.renderVirksomheder(virksomheder)}
        {this.renderDeltagere(deltagere)}
      </div>
    )
  }

  renderVirksomheder(virksomheder) {
    if (virksomheder.length == 0) {
      return <h2>Ingen virksomhder</h2>
    }

    return (
      <h2>{virksomheder.length} virksomheder</h2>
    )


  }

  renderDeltagere(deltagere) {
    if (deltagere.length == 0) {
      return <h2>Ingen deltagere</h2>
    }

    return (
      <h2>{deltagere.length} deltagere</h2>
    )
  }





}
