import { Redirect } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { deleteFavoriteShop, insertFavoriteShop } from '../../services/favorites';
import './ShopCards.css';

export default function ShopCards({ shops, favorites, setFavorites }) {
  const { user } = useUser();

  if (!user) {
    return <Redirect to="/auth/sign-in"></Redirect>;
  }

  const handleRedirect = (id) => {
    window.location = `/campfire/${id}`;
  };

  function handleFave(shop) {
    const found = favorites.find((favorite) => {
      return favorite.yelp_id === shop.id;
    });

    if (found) return true;
    else return false;
  }

  const handleCheck = async (yelp_id, user_id, shop) => {
    if (handleFave(shop)) {
      const removedItem = await deleteFavoriteShop(yelp_id, user_id);
      setFavorites(prev => prev.filter(
        (prevItem => (prevItem.id !== removedItem.id))
      ));
    }
    else {
      const newItem = await insertFavoriteShop(yelp_id, user_id);
      setFavorites((prev) => [...prev, ...newItem]);
    }
  };

  return (
    <div className="card-container">
      {shops.map((shop) => (
        <div className='shop-card' key={shop.id}>
          <div className='shop-image'>
            <img src={shop.image_url} />
          </div>
          <h2 className='shop-title' onClick={() => handleRedirect(shop.id)}>{shop.name}</h2>
          <span className='shop-address'>{shop.location.display_address}</span>
          <div className='check-fav shop-favorite'>
            <label>
              favorite
              <input type='checkbox' checked={handleFave(shop)} onChange={() => handleCheck(shop.id, user.id, shop)} />
            </label>
          </div>
          <span>{shop.phone}</span>
        </div> 
      ))}
    </div>
  );
}
