import CONSTANTS from '../constants';

const { HOST, PATH, TYPE } = CONSTANTS.API;
const { TAXIS, CARS } = PATH;

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
      path: TAXIS,
      type: TYPE.VEHICLES,
    };

    return get(config);
  },

  getCars: () => {
    const config = {
      path: CARS,
      type: TYPE.VEHICLES,
    };

    return get(config);
  },
};

export default api;
