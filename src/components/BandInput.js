// Add BandInput component
import React, { Component } from "react";

class BandInput extends Component {
  state = {
    name: ""
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.addBand(this.state);
  };

  handleChange = event => {
    this.setState({
      name: event.target.value
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            id="name"
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default BandInput;
