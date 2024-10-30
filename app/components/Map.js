// components/Map.js
import React from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const locations = [
  { name: 'Bondi Beach', lat: -33.890542, lng: 151.274856 },
  { name: 'Coogee Beach', lat: -33.923036, lng: 151.259052 },
  { name: 'Cronulla Beach', lat: -34.028249, lng: 151.157507 },
  { name: 'Manly Beach', lat: -33.800101, lng: 151.287478 },
  { name: 'Maroubra Beach', lat: -33.950198, lng: 151.259302 }
];

const Map = () => {
  const [selected, setSelected] = React.useState(null);

  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY">
      <GoogleMap
        mapContainerStyle={{ width: '500px', height: '400px' }}
        center={{ lat: -33.92, lng: 151.25 }}
        zoom={10}
      >
        {locations.map(location => (
          <Marker
            key={location.name}
            position={{ lat: location.lat, lng: location.lng }}
            onClick={() => setSelected(location)}
          />
        ))}
        {selected && (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => setSelected(null)}
          >
            <div>{selected.name}</div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
