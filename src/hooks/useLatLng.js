import { useEffect, useState } from 'react';

export default function useLatLng() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLocation = () => {
      try {
        setLoading(true);
        // eslint-disable-next-line space-before-function-paren
        navigator.geolocation.getCurrentPosition(function (position) {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        });
        setLoading(false);
      } catch (e) {
        setError(e.message);
        setLoading(false);
      }
    };
    fetchLocation();
  }, [latitude, longitude]);
  return { latitude, longitude, loading, setLoading, error, setError };
}
