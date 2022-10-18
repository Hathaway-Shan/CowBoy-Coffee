import { GoogleMap, LoadScript } from '@react-google-maps/api';
import './Map.css';

export default function Map() {

  const containerStyle = {
    width: '400px',
    height: '400px'
  };

  const center = {
    lat: 40.04738,
    lng: -105.28121
  };

  return (
    <div className='map-container'>
      <LoadScript
        googleMapsApiKey={`${process.env.REACT_APP_MAPS_API_KEY}`}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          
        </GoogleMap>
      </LoadScript>
    </div>
  );
} 
