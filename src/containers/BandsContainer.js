import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        <ul>
          {this.props.bands.map(band => (
            <li key={band.name}>{band.name}</li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { bands: state.bands }
}

const mapDispatchToProps = dispatch => {
  return { addBand: band => dispatch({ type: 'ADD_BAND', band})}
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
