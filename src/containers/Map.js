import React, { Component } from 'react';
import api from '../api/';
import Error from '../components/Error';
import Loading from '../components/Loading';
import MapWrapper from '../components/MapWrapper';
import markerObjectBuilder from '../utils/markerObjectBuilder';

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: false,
      vehicles: {
        cars: [],
        taxis: [],
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
    Promise.all([api.getCars(), api.getTaxis()])
      .then((data) => {
        const [cars, taxis] = data;
        if (this.isAlreadyMounted) {
          this.setState({
            loading: false,
            vehicles: {
              cars: markerObjectBuilder.createObjects(cars.placemarks),
              taxis: markerObjectBuilder.createObjects(taxis.poiList),
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
    const {
      error,
      loading,
      vehicles,
    } = this.state;

    if (error) {
      return <Error />;
    } else if (loading) {
      return <Loading />;
    }

    return <MapWrapper data={vehicles} />;
  }
}

export default Map;
