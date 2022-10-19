import { useParams } from 'react-router-dom';
import useShopDetail from '../../hooks/useShopDetail';
import Loading from '../Loading/Loading';
import Map from '../Map/Map';

import './ShopDetail.css';

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
    <div className='shop-container'>
      {console.log('shop detail: ', shopDetail)}
      <div className='map'>
        <Map latitude={shopDetail.coordinates.latitude} longitude={shopDetail.coordinates.longitude}/>
      </div>
      <div className='title-type'>
        <h2>{shopDetail.name}</h2>
        <h3>
          {shopDetail.categories.map((cat, index) => {
            if (shopDetail.categories.length === index + 1)
              return <span key={cat.title}>{cat.title}</span>;
            return <span key={cat.title}>{cat.title}, </span>;
          })}
        </h3>
      </div>

      <div className='shop-info'>
        <ul>
          {shopDetail.location.display_address.map((address, index) => {
            if (shopDetail.location.display_address.length === index + 1)
              return <span key={address}>{address}</span>;
            return <span key={address}>{address} </span>;
          })}
          <li>
            <span>phone: {shopDetail.phone}</span>
          </li>
          <li>
            {shopDetail.hours[0].is_open_now ? <span>Open: Yes</span> : <span>Open: No</span>}
          </li>
          <li>
            <span>price: {shopDetail.price}</span>
          </li>
          <li>
            <span>rating: {shopDetail.rating}</span>
          </li>
        </ul>
      </div>

      <div className='image-container'>
        <ul>
          {shopDetail.photos.map((img, index) => (
            <li key={index}>
              <img src={img} />
            </li>
          ))}
        </ul>
        
      </div>

    </div>
   
  );
}
