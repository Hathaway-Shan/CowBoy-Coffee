import { Redirect } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import useFavorites from '../../hooks/useFavorite';
import useShops from '../../hooks/useShops';
import { Favorites } from '../Favorites/Favorites';
import Random from '../Random/Random';

import ShopsView from '../ShopsView/ShopsView';

export default function Home() {
  const { user } = useUser();
  const { error, favorites, setFavorites, loadFave } = useFavorites();
  const { loading, shops } = useShops();
  
  if (!user) {
    return <Redirect to="/auth/sign-up"></Redirect>;
  }

  if (loadFave) return <span>we have loaded fave</span>;
  if (error) return <h3>{error.message}</h3>;


  return (
    <div>
      <h1>Your Campfire</h1>
      <Random />
      <Favorites favorites={favorites} setFavorites={setFavorites} shops={shops} error={error} loadFave={loadFave} />
      <ShopsView shops={shops} favorites={favorites} setFavorites={setFavorites} loading={loading} />
    </div>
  );
}
