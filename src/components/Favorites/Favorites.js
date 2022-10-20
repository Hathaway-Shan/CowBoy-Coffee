import { useUser } from '../../context/UserContext';
import { deleteFavoriteShop } from '../../services/favorites';
import Loading from '../Loading/Loading';
import './Favorites.css';

export function Favorites({ favorites, setFavorites, shops, loadFave, error, isVisable }) {
  const { user } = useUser();

  const handleRemove = async (yelp_id, user_id) => {
    const removedItem = await deleteFavoriteShop(yelp_id, user_id);
    setFavorites((prev) => prev.filter((prevItem) => prevItem.id !== removedItem.id));
  };

  const getFavorites = () => {
    const results = favorites.map((fave) =>
      shops.find((shop) => {
        return shop.id === fave.yelp_id;
      })
    );
    return results;
  };

  const results = getFavorites();
  const userFaves = [];
  for (let i = 0; i < results.length; i++) {
    if (results[i] !== undefined) userFaves.push(results[i]);
  }

  if (loadFave)
    return (
      <span>
        <Loading />
      </span>
    );
  if (error) return <h3>{error.message}</h3>;
  return (
    <div className={`${isVisable ? 'faves-container on-screen' : 'faves-container'}`}>
      <h2>Favorite Saloons</h2>
      {userFaves.length === 0 ? (
        <span>add some favorites to see them here</span>
      ) : (
        userFaves.map((fave) => (
          <div
            className="fave-card"
            key={fave.id}
          >
            <div className='image'>
              <img src={fave.image_url} />
            </div>
            <h2 className='title'>{fave.name}</h2>
            <button className='remove-button' onClick={() => handleRemove(fave.id, user.id)}>remove</button>
            <ul className='desc'>
              {fave.categories.map((cat) => (
                <li key={cat.title}>
                  <span>{cat.title}</span>
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
}
