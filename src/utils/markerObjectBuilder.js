import CONSTANTS from '../constants';

const { CAR, TAXI } = CONSTANTS.TYPES;

const isTaxiType = type => type === TAXI;

const taxiObject = item => ({
  id: item.id,
  title: '',
  state: item.state,
  type: TAXI,
  coordinates: {
    lng: item.coordinate.longitude,
    lat: item.coordinate.latitude,
  },
});

const carObject = item => ({
  id: item.id,
  title: item.address,
  state: '',
  type: CAR,
  coordinates: {
    lng: item.coordinates[0],
    lat: item.coordinates[1],
  },
});

const createObjects = data =>
  data.map((item) => {
    const { type } = item;
    return isTaxiType(type) ? taxiObject(item) : carObject(item);
  });

export default { createObjects };
