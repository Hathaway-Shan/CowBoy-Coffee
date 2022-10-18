import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import React, { useState } from 'react';
import './ShopDetail.css';


export default function ShopDetail() {

  const containerStyle = {
    width: '400px',
    height: '400px'
  };

  const center = {
    lat: 40.04738,
    lng: -105.28121
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY
  });

  const [map, setMap] = useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      
    </GoogleMap>
  ) : <></>;
} 
