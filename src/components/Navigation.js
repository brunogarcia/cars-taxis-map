import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import CarIcon from '@material-ui/icons/DirectionsCar';
import TaxiIcon from '@material-ui/icons/LocalTaxi';
import MapIcon from '@material-ui/icons/Map';

const styles = {
  root: {
    width: 500,
  },
};

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, value) {
    this.setState({
      value,
    });
  }

  render() {
    const { value } = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
      >
        <BottomNavigationAction label="Cars" icon={<CarIcon />} />
        <BottomNavigationAction label="Taxis" icon={<TaxiIcon />} />
        <BottomNavigationAction label="Map" icon={<MapIcon />} />
      </BottomNavigation>
    );
  }
}

export default withStyles(styles)(Footer);
