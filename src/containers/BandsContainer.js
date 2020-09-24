import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import {connect} from 'react-redux'


class BandsContainer extends Component {

  addBand = (band) => this.props.dispatch({type: "ADD_BAND", band: band})
  render() {

    const bands = this.props.bands.map((band,index) => <li key={index}>{band.name}</li>)
    console.log(this.addBand)
    return(
      <div>
        <BandInput addBand={this.addBand}/>
        <ul>
          {bands}
        </ul>
      </div>
   
    )
  }
}

const mapStateToProps = state => {
    return {
      bands: state.bands
    }
}

export default connect(mapStateToProps)(BandsContainer)
