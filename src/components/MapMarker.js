import React from 'react';
import { Marker } from 'react-leaflet';
import MapMarkerPopup from './MapMarkerPopup';
import markerIcon from '../utils/markerIcon';
import Types from '../utils/types';

const MapMarker = (props) => {
  const {
    type,
    coordinates,
  } = props.data;

  const position = [coordinates.lat, coordinates.lng];

  return (
    <Marker
      position={position}
      icon={markerIcon.getIcon(type)}
    >
      <MapMarkerPopup data={props.data} />
    </Marker>
  );
};

MapMarker.propTypes = {
  data: Types.marker.isRequired,
};

export default MapMarker;
