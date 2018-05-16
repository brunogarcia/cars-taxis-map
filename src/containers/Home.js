import React, { Component } from 'react';
import api from '../api';
import Error from '../components/Error';
import Loading from '../components/Loading';
import Cars from '../components/Cars';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: false,
      vehicles: {
        taxis: [],
        cars: [],
      },
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
    Promise.all([api.getTaxis(), api.getCars()])
      .then((data) => {
        const [taxiData, carsData] = data;

        if (this.isAlreadyMounted) {
          this.setState({
            loading: false,
            vehicles: {
              taxis: taxiData.poiList,
              cars: carsData.placemarks,
            },
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
    const { error, loading, vehicles } = this.state;

    if (error) {
      return <Error />;
    } else if (loading) {
      return <Loading />;
    }

    return <Cars data={vehicles.cars} />;
  }
}

export default Home;
