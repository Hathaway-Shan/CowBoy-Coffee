import { useEffect, useState } from 'react';
import { fetchShopDetail } from '../services/yelp';


export default function useShopDetail(detailID) {
  const [shopDetail, setShopDetail] = useState(null);
  const [id, setID] = useState(null);

  setID(detailID);

  useEffect(() => {
    const fetchData = async (id) => {
      try {
        const data = await fetchShopDetail(id);
        console.log('data inside hook: ', data);
        setShopDetail(data);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e);
      }
    };
    fetchData(id);
  }, [id]);
  
  return { shopDetail };
}
