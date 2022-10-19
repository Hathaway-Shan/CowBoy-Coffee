import { NavLink } from 'react-router-dom';
import './ShopCards.css';

export default function ShopCards({ shops }) {
  

  return (
    <div className="card-container">
      {shops.map((shop) => (
        <NavLink key={shop.id} to={`/campfire/${shop.id}`}>
          <div>
            <h2>{shop.name}</h2>
            <span>{shop.location.display_address}</span>
            <span>{shop.phone}</span>
            <img src={shop.image_url} />
          </div>
        </NavLink>
      ))}
    </div>
  );
}
