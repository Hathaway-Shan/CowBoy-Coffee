import { NavLink, Redirect } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { insertFavoriteShop } from '../../services/favorites';
import './ShopCards.css';

export default function ShopCards({ shops, favorites, setFavorites }) {
  const { user } = useUser();

  if (!user) {
    return <Redirect to="/auth/sign-up"></Redirect>;
  }

  // iterate though shops
  // for each iteration, check all the user_id's inside of favorites
  // return true when there is a match

  function handleFave(shop) {
    if (favorites.find(favorite => {
      favorite.yelp_id === shop.id;
    }))
      return true;
    else return false;
  }

  const handleCheck = async (yelp_id, user_id) => {
    const newItem = await insertFavoriteShop(yelp_id, user_id);
    setFavorites((prev) => [...prev, ...newItem]);
  };

  return (
    <div className="card-container">
      {shops.map((shop) => (
        <div key={shop.id}>
          <h2>{shop.name}</h2>
          <input type='checkbox' onChange={() => handleCheck(shop.id, user.id)} />
          <span>{shop.location.display_address}</span>
          <span>{shop.phone}</span>
          <img src={shop.image_url} />
        </div> 
      ))}
    </div>
  );
}
