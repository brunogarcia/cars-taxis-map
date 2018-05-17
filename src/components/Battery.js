import React from 'react';
import PropTypes from 'prop-types';
import BatteryCharging20 from '@material-ui/icons/BatteryCharging20';
import BatteryCharging30 from '@material-ui/icons/BatteryCharging30';
import BatteryCharging50 from '@material-ui/icons/BatteryCharging50';
import BatteryCharging60 from '@material-ui/icons/BatteryCharging60';
import BatteryCharging80 from '@material-ui/icons/BatteryCharging80';
import BatteryCharging90 from '@material-ui/icons/BatteryCharging90';
import BatteryFull from '@material-ui/icons/BatteryChargingFull';
import Badge from '@material-ui/core/Badge';
import './Battery.css';

const getIcon = (energy) => {
  if (energy <= 20) {
    return <BatteryCharging20 color="error" />;
  }

  if (energy <= 30) {
    return <BatteryCharging30 />;
  }

  if (energy <= 50) {
    return <BatteryCharging50 />;
  }

  if (energy <= 60) {
    return <BatteryCharging60 />;
  }

  if (energy <= 80) {
    return <BatteryCharging80 />;
  }

  if (energy < 99) {
    return <BatteryCharging90 />;
  }

  return <BatteryFull className="Battery-full" />;
};

const Battery = (props) => {
  const { energy } = props;

  return (
    <Badge badgeContent={energy} color="primary">
      {getIcon(energy)}
    </Badge>
  );
};

Battery.propTypes = {
  energy: PropTypes.number.isRequired,
};

export default Battery;
