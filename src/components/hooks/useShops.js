import { useEffect } from 'react';
import { fetchShops } from '../../services/yelp';

export default function useShops() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchShops();
        console.log('useShops data is: ', data);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e.message);
      }
    };
    fetchData();
  }, []);
  return {};
}
