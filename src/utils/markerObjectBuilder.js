import CONSTANTS from '../constants';

const { CAR, TAXI } = CONSTANTS.TYPES;

const isTaxiType = type => type === TAXI;

const taxiObject = item => ({
  id: item.id,
  address: null,
  state: item.state,
  type: TAXI,
  fuel: null,
  plate: null,
  coordinates: {
    lng: item.coordinate.longitude,
    lat: item.coordinate.latitude,
  },
});

const carObject = item => ({
  id: item.id,
  address: item.address,
  state: null,
  type: CAR,
  fuel: item.fuel,
  plate: item.name,
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
