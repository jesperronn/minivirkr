import React from 'react'

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      term: ''
    }
  }

  formSubmit = (event) => {
    event.preventDefault()
    // send result upstream
    this.props.submit(this.state.term)
  }

  update = (event) => {
    this.setState({term: event.target.value})
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <form onSubmit={this.formSubmit}>
            <div className="input-group">
              <input type='text' className='form-control' placeholder='Personnavn, virksomhedsnavn eller CVR nummer' value={this.state.cvrnr} onChange={this.update}/>
              <span className="input-group-btn">
                <input className='btn btn-primary' type='submit' value='Søg'/>
              </span>
            </div>
          </form>
        </div>
      </div>
    )
  }

}
