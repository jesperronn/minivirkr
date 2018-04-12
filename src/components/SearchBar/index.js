import React from 'react'

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      term: ''
    }

    this.update = this.update.bind(this)
    this.formSubmit = this.formSubmit.bind(this)
  }

  formSubmit(event) {
    event.preventDefault()
    // send result upstream
    this.props.submit(this.state.term)
  }

  update(event) {
    this.setState({term: event.target.value})
  }

  render() {
    return (
      <div className='columns'>
        <div className='column'>
          <form onSubmit={this.formSubmit}>
            <div className='field has-addons'>
              <p className='control is-expanded'>
                <input className='input' type="text" placeholder='Personnavn, virksomhedsnavn eller CVR nummer' value={this.state.cvrnr} onChange={this.update}/>
              </p>
              <p className='control'>
                <button type='submit' className='button is-info'>Søg</button>
              </p>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
