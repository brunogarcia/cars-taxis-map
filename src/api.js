import CONSTANTS from './constants';

const { HOST, PATH, TYPE } = CONSTANTS.API;
const { MYTAXI, CAR2GO } = PATH;

const checkResponse = (res) => {
  if (!res.ok) {
    throw Error(res.statusText);
  }

  return res.json();
};

const get = ({ path, type }) => {
  const config = `${HOST}/${path}/${type}`;
  const req = new Request(config);
  return fetch(req).then(res => checkResponse(res));
};

const api = {
  getTaxis: () => {
    const config = {
      path: MYTAXI,
      type: TYPE.VEHICLES,
    };

    return get(config);
  },

  getCars: () => {
    const config = {
      path: CAR2GO,
      type: TYPE.VEHICLES,
    };

    return get(config);
  },
};

export default api;
