import React, { Component } from "react";
class BandInput extends Component {
  state = {
    name: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addBand({ name: this.state.name });
    this.setState({ name: "" });
  };
  handleOnChange = e => {
    this.setState({ name: e.target.value });
  };
  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleOnChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default BandInput;
