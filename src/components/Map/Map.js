import { GoogleMap, LoadScript } from '@react-google-maps/api';
import './Map.css';

export default function Map({ latitude, longitude }) {

  const containerStyle = {
    width: '400px',
    height: '400px'
  };

  const center = {
    lat: latitude,
    lng: longitude
  };

  return (
    <div className='map-container'>
      <LoadScript
        googleMapsApiKey={`${process.env.REACT_APP_MAPS_API_KEY}`}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={16}
        >
          
        </GoogleMap>
      </LoadScript>
    </div>
  );
} 
