// import React, { Component } from 'react'

// class BandInput extends Component {

//   state = {
//     name: ''
//   }

//   handleChange = e => {
//     this.setState({ name: e.target.value })
//   }

//   handleSubmit = e => {
//     e.preventDefault()
//     this.props.addBand(this.state)
//     this.setState({
//       name: ''
//     })
//   }

//   render() {
//     return(
//       <div>
//         <form onSubmit={e => this.handleSubmit(e)}>
//           <input 
//             type="text"
//             onChange={e => this.handleChange(e)}
//             name="name"
//           />
//           <input type="submit"></input>
//         </form>
//       </div>
//     )
//   }
// }

// export default BandInput

  
import React, { Component } from 'react';

class BandInput extends Component {
  state = {
    name: '',
  };

  handleOnChange(event) {
    this.setState({
      name: event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addBand(this.state);
    this.setState({
      name: '',
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type='text'
            value={this.state.name}
            onChange={(event) => this.handleOnChange(event)}
          />
          <input type='submit' />
        </form>
      </div>
    );
  }
}

export default BandInput;
