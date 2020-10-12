// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  state= {
    name: ""
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({
      [name]: value
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
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            name="name"
            />
            <input type="submit" name="Submit"/>
        </form>
      </div>
    )
  }
}

export default BandInput
