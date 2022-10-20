import useFavorites from '../../hooks/useFavorite';

export function Favorites() {
  const { error, favorites, loadFave } = useFavorites();

  if (loadFave) return <span>we have loaded fave</span>;
  if (error) return <h3>{error.message}</h3>;
  return <h1>RIP Pokemon Dungeon</h1>;
}
