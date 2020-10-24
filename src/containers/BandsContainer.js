import React, { Component } from 'react'
import BandInput from '../components/BandInput'
class BandsContainer extends Component {
  addBand = () => {
    

  }
  
  render() {
    return(
      <div>
        <BandInput addBand = {this.addBand}/>
      </div>
    )
  }
}

export default BandsContainer
