import { GoogleMap, InfoWindow, LoadScript, Marker } from '@react-google-maps/api';
import { useEffect, useState } from 'react';
import './Map.css';

export default function Map({ shopDetail, latitude, longitude }) {

  const containerStyle = {
    width: '400px',
    height: '400px'
  };

  const center = {
    lat: latitude,
    lng: longitude
  };

  const onInfoLoad = InfoWindow => {
    console.log('infowindow is: ', InfoWindow);
  };

  const divStyle = {
    background: `white`,
    border: `1px solid #ccc`,
    padding: 15,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat'
  };

  

  const Marker = (options) => {
    const [marker, setMarker] = useState();

    useEffect(() => {
      if (!marker) {
        setMarker(new window.google.maps.Marker());
      }
      return () => {
        if (marker) {
          marker.setMap(null);
        }
      };
    }, [marker]);
    useEffect(() => {
      if (marker) {
        marker.setOptions(options);
      }
    }, [marker, options]);
    return null;
  };

  return (
    <div className='map-container'>
      <LoadScript
        googleMapsApiKey={`${process.env.REACT_APP_MAPS_API_KEY}`}
      >
        <GoogleMap
          id='map'
          mapContainerStyle={containerStyle}
          center={center}
          zoom={18}
        >
          <Marker position={center} />
          <InfoWindow
            onLoad={onInfoLoad}
            position={center}
          >
            <div style={divStyle}>
              <h1>{shopDetail.name}</h1>
            </div>
          </InfoWindow>
        </GoogleMap>
      </LoadScript>
    </div>
  );
} 
