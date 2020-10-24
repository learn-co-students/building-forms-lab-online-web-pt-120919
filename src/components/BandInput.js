// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  state = {
    name:''
  }
  changeOnInput = (event) =>{
    this.setState({
      [event.target.name]: event.target.value
   })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addBand(this.state)
    this.setState({
      name: ""
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <input type='text' value={this.state.name} onChange={this.changeOnInput}/>
          <submit/>
        </form>
      </div>
    )
  }
}

export default BandInput
