// // components/Map.js
// "use client"
// import React from 'react';
// import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

// const locations = [
//   { name: 'Life Care', lat: 22.57720, lng: 88.47086 },
//   { name: 'Aliah University', lat: 22.59079, lng: 88.48441 },
//   { name: 'Axis Mall', lat: 22.58009, lng: 88.45776 },
//   { name: 'TCS', lat: 22.58298, lng: 88.48930 },
//   { name: 'RDB CINEMAS', lat: 22.56953, lng: 88.43068 }
// ];

// const Map = () => {
//   const [selected, setSelected] = React.useState(null);

//   return (
//     <LoadScript googleMapsApiKey="">
//       <GoogleMap
//         mapContainerStyle={{ width: '100%', height: '100%', borderRadius: '4px' }}
//         center={{ lat: 22.57879, lng: 88.47168 }}
//         zoom={10}
//       >
//         {locations.map(location => (
//           <Marker
//             key={location.name}
//             position={{ lat: location.lat, lng: location.lng }}
//             onClick={() => setSelected(location)}
//           />
//         ))}
//         {selected && (
//           <InfoWindow
//             position={{ lat: selected.lat, lng: selected.lng }}
//             onCloseClick={() => setSelected(null)}
//           >
//             <div>{selected.name}</div>
//           </InfoWindow>
//         )}
//       </GoogleMap>
//     </LoadScript>
//   );
// };

// export default Map;



// components/Map.js
"use client";
import React from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const locations = [
  { name: 'Life Care', lat: 22.57720, lng: 88.47086 },
  { name: 'Aliah University', lat: 22.59079, lng: 88.48441 },
  { name: 'Axis Mall', lat: 22.58009, lng: 88.45776 },
  { name: 'TCS', lat: 22.58298, lng: 88.48930 },
  { name: 'RDB CINEMAS', lat: 22.56953, lng: 88.43068 }
];

const Map = () => {
  const [selected, setSelected] = React.useState(null);
  const [userLocation, setUserLocation] = React.useState(null);

  React.useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        () => {
          alert('Error getting location');
        }
      );
    }
  }, []);

  const center = userLocation || { lat: 22.57879, lng: 88.47168 }; // Default to your original center if location not available

  return (
    <LoadScript googleMapsApiKey="">
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '100%', borderRadius: '4px' }}
        center={center}
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
