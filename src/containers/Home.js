import React, { Component } from 'react';
import api from '../api';
import Error from '../components/Error';
import Loading from '../components/Loading';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: false,
      vehicles: {
        mytaxi: [],
        car2go: [],
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
    const myTaxiVehicles = api.getMyTaxiVehicles();
    const car2GoVehicles = api.getCar2GoVehicles();

    Promise.all([myTaxiVehicles, car2GoVehicles])
      .then((data) => {
        const [myTaxiData, car2GoData] = data;

        if (this.isAlreadyMounted) {
          this.setState({
            loading: false,
            vehicles: {
              mytaxi: myTaxiData.poiList,
              car2go: car2GoData.placemarks,
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
    const { error, loading } = this.state;

    if (error) {
      return <Error />;
    } else if (loading) {
      return <Loading />;
    }

    console.log(this.state.vehicles.mytaxi);
    console.log(this.state.vehicles.car2go);

    return 'Home';
  }
}

export default Home;
