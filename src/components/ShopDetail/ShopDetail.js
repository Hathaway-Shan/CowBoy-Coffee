import { useParams } from 'react-router-dom';
import useShopDetail from '../../hooks/useShopDetail';
import Loading from '../Loading/Loading';
import Map from '../Map/Map';

export default function ShopDetail() {
  const { id } = useParams();
  const { shopDetail, loading, error } = useShopDetail(id);

  if (error) {
    return <h1>{error}</h1>;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <Map />
      <h1>what</h1>
      <h2>{shopDetail.name}</h2>
    </div>
   
  );
}
