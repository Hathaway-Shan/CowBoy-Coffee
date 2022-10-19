import { useEffect, useState } from 'react';
import { fetchShops } from '../services/yelp';

export default function useShops() {
  const [shops, setShops] = useState([]);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [loading, setLoading] = useState(false);

  async function getLocation() {
    // eslint-disable-next-line space-before-function-paren
    navigator.geolocation.getCurrentPosition(function (position) {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }
  getLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchShops(latitude, longitude);
        setShops(data);
        setLoading(false);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e.message);
        setLoading(false);
      }
    };
    if (latitude && longitude) fetchData();
  }, [latitude, longitude]);
  return { shops, loading, setShops };
}
