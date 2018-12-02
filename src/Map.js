import React from 'react';
import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';

const myMap = props => {
  return (
    <Map center={[51.62, 19.63]} zoom={9}>
      <Marker anchor={[51.417, 19.679]} payload={1} />
      <Marker anchor={[51.656, 19.374]} payload={1} />
      <Marker anchor={[51.821, 19.312]} payload={1} />
    </Map>
  );
};

export default myMap;
