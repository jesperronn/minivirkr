import React from 'react'

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {term: ''}

    this.update = this.update.bind(this)
    this.formSubmit = this.formSubmit.bind(this)
  }

  formSubmit(event) {
    //
    event.preventDefault()
    // send result upstream
    this.props.submit(this.state.term)
  }

  update(event) {
    this.setState({term: event.target.value})
  }

  render() {
    return (
      <div className='container'>
        <form className='form-inline' onSubmit={this.formSubmit}>
          <input
            type='text'
            className='form-control'
            placeholder='Søgeord'
            value={this.state.cvrnr}
            onChange={this.update}
          />
          <input className='btn btn-primary' type='submit' value='Søg' />
        </form>
      </div>
    )
  }

}
