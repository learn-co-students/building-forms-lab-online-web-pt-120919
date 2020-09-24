// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  
  
    state = {
    name: '',
    };

    handleChange = (e) => {
      this.setState({name: e.target.value})
    } // event handler set to on change event changes name state

    handleSubmit = (e) => {
      e.preventDefault();
      this.props.addBand(this.state);
      this.setState({
        name: ''
      })
    }

  render() {
    return(
      <div>
        <form onSubmit = {this.handleSubmit}>
        <input type = "text" onChange = {this.handleChange} value= {this.state.name} name ="name"></input>    
        <button type = "submit">Submit</button>
        </form>
          </div>
    )
  }
}

export default BandInput
