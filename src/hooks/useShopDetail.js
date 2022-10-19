import { useEffect, useState } from 'react';
import { fetchShopDetail } from '../services/yelp';


export default function useShopDetail(id) {
  const [shopDetail, setShopDetail] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchShopDetail(id);
        setShopDetail(data);
        setLoading(false);
      } catch (e) {
        setError(e);
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);
  
  return { shopDetail, error, loading };
}
