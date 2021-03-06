import React from 'react'
import _ from 'lodash'

import {getVirkrVirksomhed} from '../../API'
import Virksomheder from './Virksomheder'
import VirksomhedsDetaljer from './Virksomheder/Detaljer'
import Personer from './Personer'

export default class Result extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      detaljer: {
        virksomhed: {}
      }
    }
  }

  vaelgCvrNr = (cvrnr) => {
    getVirkrVirksomhed(cvrnr)
    .then(resultat => this.setState({detaljer: {virksomhed: resultat}}))
  }

  render() {
    const {resultat} = this.props
    const {virksomhed} = this.state.detaljer

    if (!_.isEmpty(virksomhed)) {
      return (
        <div>
          <br/>
          <div className='row'>
            <div className='col-md-12'>
              <VirksomhedsDetaljer virksomhed={virksomhed}/>
            </div>
          </div>
        </div>
      )
    }

    // Nothing to show yet
    if (_.isEmpty(resultat)) {
      return null
    }

    const {virksomhedSoegeresultat, deltagerSoegeresultat} = resultat

    return (
      <div>
        <br/>
        <div className='row'>
          <div className='col-md-12'>
            <Personer data={deltagerSoegeresultat.deltagere}/>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <Virksomheder data={virksomhedSoegeresultat.virksomheder} vaelgCvrNr={this.vaelgCvrNr}/>
          </div>
        </div>
      </div>
    )
  }

}
