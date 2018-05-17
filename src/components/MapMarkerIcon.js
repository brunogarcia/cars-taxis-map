import Leaflet from 'leaflet';
import TaxiIcon from '../taxi.png';
import CarIcon from '../car.png';
import CONSTANTS from '../constants';

const { TAXI } = CONSTANTS.TYPES;

const taxiIcon = Leaflet.icon({
  iconUrl: TaxiIcon,
});

const carIcon = Leaflet.icon({
  iconUrl: CarIcon,
});

const getIcon = type => (type === TAXI ? taxiIcon : carIcon);

export default { getIcon };
