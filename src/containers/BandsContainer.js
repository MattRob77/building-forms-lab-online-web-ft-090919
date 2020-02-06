<<<<<<< HEAD
import React, { Component } from 'react'
import BandInput from '../component/BandInput';
=======
import React, { Component } from 'react';
import BandInput from '../components/BandInput';
>>>>>>> 06116d1437168597b00d521108742c1cf7e72306
import Bands from '../components/Bands';
import { connect } from 'react-redux';

class BandsContainer extends Component {
<<<<<<< HEAD
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        <Bands bands={this.props.bands} />
      </div>
    );
  }
=======
	render() {
		return (
			<div>
				<BandInput addBand={this.props.addBand} />
				<Bands bands={this.props.bands} />
			</div>
		);
	}
>>>>>>> 06116d1437168597b00d521108742c1cf7e72306
}

const mapStateToProps = ({ bands }) => ({ bands });

const mapDispatchToProps = dispatch => ({
<<<<<<< HEAD
  addband: band => dispatch({ type: 'ADD_BAND'}, band)
});

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
=======
	addBand: band => dispatch({ type: 'ADD_BAND', band })
});

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
>>>>>>> 06116d1437168597b00d521108742c1cf7e72306
