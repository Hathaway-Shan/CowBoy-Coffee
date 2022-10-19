import useFavorites from '../../hooks/useFavorite';

export function Favorites({ favorites, shops, loadFave, error }) {
  if (loadFave) return <span>we have loaded fave</span>;
  if (error) return <h3>{error.message}</h3>;
  console.log('favorites is: ', favorites);

  return <h1>RIP Pokemon Dungeon</h1>;
}
