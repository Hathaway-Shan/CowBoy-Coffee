import { useUser } from '../../context/UserContext';
import { deleteFavoriteShop } from '../../services/favorites';
import Loading from '../Loading/Loading';
import './Favorites.css';

export function Favorites({ favorites, setFavorites, shops, loadFave, error }) {
  const { user } = useUser();

  const handleRemove = async (yelp_id, user_id) => {
    const removedItem = await deleteFavoriteShop(yelp_id, user_id);
    setFavorites(prev => prev.filter(
      (prevItem => (prevItem.id !== removedItem.id)) 
    ));
  };
  
  const getFavorites = () => {
    const results = favorites.map(fave => (
      shops.find(shop => {
        return shop.id === fave.yelp_id;
      })
    ));
    return results;
  };
    
  const results = getFavorites();
  const userFaves = [];
  for (let i = 0; i < results.length; i++) {
    if (results[i] !== undefined) 
      userFaves.push(results[i]);
  }
    
  if (loadFave) return <span><Loading /></span>;
  if (error) return <h3>{error.message}</h3>;

  return (
    <div className='faves-container'>
      <h2>Favorite Saloons</h2>
      {userFaves.length === 0 ? <span>add some favorites to see them here</span> : 
        userFaves.map(
          (fave) => (
            <div className='fave-card' key={fave.id} style={{ 
              backgroundImage: `url(${fave.image_url})`
            }}>
              
              <h3>{fave.name}</h3>
              {fave.categories.map(cat => (<span key={cat.title}>{cat.title}</span>))}
              <button onClick={() => handleRemove(fave.id, user.id)}>remove</button>
            </div>
          )
        )
      }
    </div>
  );
}
