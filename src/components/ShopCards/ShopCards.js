import { Redirect } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { deleteFavoriteShop, insertFavoriteShop } from '../../services/favorites';
import './ShopCards.css';

export default function ShopCards({ shops, favorites, setFavorites }) {
  const { user } = useUser();

  if (!user) {
    return <Redirect to="/auth/sign-up"></Redirect>;
  }

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
        <div key={shop.id}>
          <h2>{shop.name}</h2>
          <input type='checkbox' checked={handleFave(shop)} onChange={() => handleCheck(shop.id, user.id, shop)} />
          <span>{shop.location.display_address}</span>
          <span>{shop.phone}</span>
          <img src={shop.image_url} />
        </div> 
      ))}
    </div>
  );
}
