import { Redirect, useParams } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import useShopDetail from '../../hooks/useShopDetail';
import Loading from '../Loading/Loading';
import Map from '../Map/Map';

import './ShopDetail.css';

export default function ShopDetail() {
  const { id } = useParams();
  const { shopDetail, loading, error } = useShopDetail(id);
  
  const { user } = useUser();
  if (!user) {
    return <Redirect to="/auth/sign-up"></Redirect>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div className='shop-container'>
      <div className='image-container'>
        <ul>
          {shopDetail.photos.map((img, index) => (
            <li key={index}>
              <img src={img} />
            </li>
          ))}
        </ul>
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
          {shopDetail.phone ? <li>
            <span>phone: <a href={`tel:${shopDetail.phone}`}>{shopDetail.phone}</a></span>
          </li> : <></>}
          {shopDetail.hours ? <li>
            {shopDetail.hours[0].is_open_now ? <span>Open: Yes</span> : <span>Open: No</span>}
          </li> : <></>}
          {shopDetail.price ? <li>
            <span>price: {shopDetail.price}</span>
          </li> : <></>}
          {shopDetail.rating ? <li>
            <span>rating: {shopDetail.rating}</span>
          </li> : <></>}
        </ul>
      </div>
      <div className='map'>
        <Map shopDetail={shopDetail} latitude={shopDetail.coordinates.latitude} longitude={shopDetail.coordinates.longitude}/>
      </div>
      <div className='yelp-link'>
        <span>
          <a href={shopDetail.url}>yelp/{shopDetail.alias}</a>
        </span>
      </div>
    </div>
   
  );
}
