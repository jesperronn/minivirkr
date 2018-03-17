import React from 'react'
import _ from 'lodash'

import Virksomheder from './Virksomheder'
import Personer from './Personer'

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
        <br/>
        <div className='row'>
          <div className='col-md-12'>
            <Personer data={deltagere}/>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <Virksomheder data={virksomheder}/>
          </div>
        </div>
      </div>
    )
  }

}
