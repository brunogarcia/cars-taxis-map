import CONSTANTS from './constants';

const { HOST, PATH, TYPE } = CONSTANTS.API;
const { MYTAXI, CAR2GO } = PATH;

const get = ({ path, type }) => {
  const config = `${HOST}/${path}/${type}`;
  const myRequest = new Request(config);
  return fetch(myRequest);
};

const api = {
  getMyTaxiVehicles: () => {
    const config = {
      path: MYTAXI,
      type: TYPE.VEHICLES,
    };

    return get(config);
  },

  getCar2GoVehicles: () => {
    const config = {
      path: CAR2GO,
      type: TYPE.VEHICLES,
    };

    return get(config);
  },
};

export default api;
