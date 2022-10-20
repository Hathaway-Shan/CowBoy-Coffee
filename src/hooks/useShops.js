import { useEffect, useState } from 'react';

import { fetchShops } from '../services/yelp';
import useLatLng from './useLatLng';

export default function useShops() {
  const [shops, setShops] = useState([]);
  const { latitude, longitude, loading, setLoading, setError } = useLatLng();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchShops(latitude, longitude);
        setShops(data);
        setLoading(false);
      } catch (e) {
        // eslint-disable-next-line no-console
        setError(e.message);
        setLoading(false);
      }
    };
    if (latitude && longitude) fetchData();
  }, [latitude, longitude, setLoading, setError]);
  return { shops, loading, setShops };
}
