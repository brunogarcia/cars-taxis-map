import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import CarIcon from '@material-ui/icons/DirectionsCar';
import TaxiIcon from '@material-ui/icons/LocalTaxi';
import MapIcon from '@material-ui/icons/Map';
import constants from '../constants';

const PATHS = Object.values(constants.APP.PATH);

const styles = {
  root: {
    width: 500,
  },
};

const changePath = ({ value, history }) => {
  history.push(PATHS[value]);
};

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.updateActiveNavigation();
  }

  handleChange(event, value) {
    changePath({
      value,
      history: this.props.history,
    });

    this.setState({
      value,
    });
  }

  updateActiveNavigation() {
    const { pathname } = this.props.location;
    const value = PATHS.indexOf(pathname);

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

Navigation.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default withRouter(withStyles(styles)(Navigation));
