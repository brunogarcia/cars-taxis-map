import React, { Component } from 'react';
import api from '../api';
import Error from '../components/Error';
import Loading from '../components/Loading';
import CarList from '../components/CarList';

class Cars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: false,
      cars: [],
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
    api.getCars()
      .then((data) => {
        if (this.isAlreadyMounted) {
          this.setState({
            loading: false,
            cars: data.placemarks,
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
    const { error, loading, cars } = this.state;

    if (error) {
      return <Error />;
    } else if (loading) {
      return <Loading />;
    }

    return <CarList data={cars} />;
  }
}

export default Cars;
