import { useEffect, useState } from 'react';
import { fetchShops } from '../services/yelp';

export default function useShops() {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchShops();
        console.log('data in hook: ', data);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e.message);
      }
    };
    fetchData();
  }, []);
  return { shops, setShops };
}
