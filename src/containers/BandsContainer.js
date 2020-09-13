import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import Bands from './Bands';
import { connect } from 'react-redux';

class BandsContainer extends Component {

  render() {
    console.log(this.props.bands)
    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        {this.props.bands.map((band, index) => {return <li key={index}>{band.name}</li>})}
        {/* <Bands bands={this.props.bands} /> */}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: band => {
      dispatch({ type: "ADD_BAND", band }) 
    }
  };
}

const mapStateToProps = state => {
  return ({
    bands: state.bands
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
