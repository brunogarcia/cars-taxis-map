import { shape, number, string, arrayOf } from 'prop-types';

const car = shape({
  address: string.isRequired,
  coordinates: arrayOf(number).isRequired,
  engineType: string.isRequired,
  exterior: string.isRequired,
  fuel: number.isRequired,
  interior: string.isRequired,
  name: string.isRequired,
  vin: string.isRequired,
  id: number.isRequired,
});

export default { car };
