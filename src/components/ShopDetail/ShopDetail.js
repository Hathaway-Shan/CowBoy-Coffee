import { useState } from 'react';
import { useParams } from 'react-router-dom';
import useShopDetail from '../../hooks/useShopDetail';
import { fetchShopDetail } from '../../services/yelp';

export default function ShopDetail() {
  const { id } = useParams();
  const [shopDetail, setShopDetail] = useState();
  console.log('id: ', id);

  const getDetail = async () => {
    const data = await fetchShopDetail(id);
    setShopDetail(data);
  };
  getDetail();
  
  return (
    <>
      {console.log('shop detail is: ', shopDetail)}
      <div>
        <h1>what</h1>
        <h2>{shopDetail.name}</h2>
      </div>
    </>
  );
}
