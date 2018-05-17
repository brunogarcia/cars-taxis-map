import CONSTANTS from './constants';

const { CAR, TAXI } = CONSTANTS.TYPES;

const taxiMarker = item => ({
  id: item.id,
  title: '',
  state: item.state,
  type: TAXI,
  coordinates: {
    lng: item.coordinate.longitude,
    lat: item.coordinate.latitude,
  },
});

const carMarker = item => ({
  id: item.id,
  title: item.address,
  state: '',
  type: CAR,
  coordinates: {
    lng: item.coordinates[0],
    lat: item.coordinates[1],
  },
});

const isTaxiType = type => type === TAXI;

const markerBuilder = data =>
  data.map((item) => {
    const { type } = item;
    return isTaxiType(type) ? taxiMarker(item) : carMarker(item);
  });

export default { markerBuilder };
