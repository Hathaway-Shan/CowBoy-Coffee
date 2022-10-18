import { useEffect, useState } from 'react';
import { fetchShops } from '../services/yelp';

export default function useShops() {
  const [shops, setShops] = useState([]);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  async function getLocation() {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }
  getLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchShops();
        setShops(data);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e.message);
      }
    };
    fetchData();
  }, [latitude, longitude]);
  return { shops, setShops };
}
