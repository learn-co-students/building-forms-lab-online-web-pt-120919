import React, { Component } from 'react'

class BandInput extends Component {
  
  state = {
    name: ''
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addBand(this.state)
    this.setState({name: ''})
  }

  handleOnChange = event => {
    this.setState({name: event.target.value})
  }
  
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleOnChange} value={this.state.name} type="text"></input>
          <input type="submit"></input>
        </form>
      </div>
    )
  }
}

export default BandInput
