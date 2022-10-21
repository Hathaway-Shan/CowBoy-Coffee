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

  const handleRedirect = (fave) => {
    window.location = `/campfire/${fave.id}`;
  };

  const getFavorites = () => {
    const results = [];
    for (let i = 0; i < favorites.length; i++) {
      for (let j = 0; j < shops.length; j++) {
        if (favorites[i].yelp_id === shops[j].id) {
          results.push(shops[j]);
        }
      }
    }
    return results;
  };
  const results = getFavorites();
 

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
      {results.length === 0 ? (
        <span>add some favorites to see them here</span>
      ) : (
        results.map((fave) => (
          <div
            className="fave-card"
            key={fave.id}
          >
            <div className='image'>
              <img src={fave.image_url} />
            </div>
            <h2 onClick={() => handleRedirect(fave)} className='title'>{fave.name}</h2>
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
