import { Redirect } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import useFavorites from '../../hooks/useFavorite';
import useShops from '../../hooks/useShops';
import { Favorites } from '../Favorites/Favorites';
import Loading from '../Loading/Loading';
import Random from '../Random/Random';
import './Home.css';
import ShopsView from '../ShopsView/ShopsView';
import { useState } from 'react';

export default function Home() {
  const { user } = useUser();
  const { error, favorites, setFavorites, loadFave } = useFavorites();
  const { loading, shops } = useShops();
  const [isVisable, setIsVisable] = useState(false);

  if (!user) {
    return <Redirect to="/auth/sign-up"></Redirect>;
  }

  if (loadFave) return <Loading />;
  if (error) return <h3>{error.message}</h3>;

  const handleSetVisable = () => {
    setIsVisable((prev) => !prev);
  };

  return (
    <div className="home-container">
      {loading ? <Loading /> : <></>}
      <div className="home-header">
        <button className="favoritesButton" onClick={handleSetVisable}>
          <img
            className="favoritesButtonImg"
            src={`${process.env.PUBLIC_URL}/assets/favorite.png`}
          />
          favorites
        </button>
        <h1>Campfire</h1>
      </div>
      <Random />
      <Favorites
        favorites={favorites}
        setFavorites={setFavorites}
        shops={shops}
        error={error}
        loadFave={loadFave}
        isVisable={isVisable}
      />
      <ShopsView
        shops={shops}
        favorites={favorites}
        setFavorites={setFavorites}
        loading={loading}
      />
    </div>
  );
}
