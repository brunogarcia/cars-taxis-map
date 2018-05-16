import Grid from '@material-ui/core/Grid';
import React, { Component } from 'react';
import api from '../api';
import Error from '../components/Error';
import Loading from '../components/Loading';
import TaxiList from '../components/TaxiList';

class Taxis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: false,
      taxis: [],
    };
  }

  componentDidMount() {
    this.isAlreadyMounted = true;
    this.getVehicles();
  }

  componentWillUnmount() {
    this.isAlreadyMounted = false;
  }

  getVehicles() {
    api.getTaxis()
      .then((data) => {
        if (this.isAlreadyMounted) {
          this.setState({
            loading: false,
            taxis: data.poiList,
          });
        }
      }).catch(() => {
        if (this.isAlreadyMounted) {
          this.setState({
            error: true,
          });
        }
      });
  }

  render() {
    const { error, loading, taxis } = this.state;

    if (error) {
      return <Error />;
    } else if (loading) {
      return <Loading />;
    }

    return (
      <Grid container spacing={24}>
        <Grid item xs={6}>
          <TaxiList data={taxis} />
        </Grid>
      </Grid>
    );
  }
}

export default Taxis;
