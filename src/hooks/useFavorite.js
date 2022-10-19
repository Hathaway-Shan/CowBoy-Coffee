import { useEffect, useState } from 'react';
import { getUserFavorites } from '../services/favorites';
import { useUser } from '../context/UserContext';

export default function useFavorites() {
  const { user } = useUser();

  const [favorites, setFavorites] = useState(false);
  const [error, setError] = useState(null);
  const [loadFave, setLoadFave] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoadFave(true);
        const data = await getUserFavorites(user.id);
        setFavorites(data);
        setLoadFave(false);
      } catch (e) {
        setError(e);
        setLoadFave(false);
      }
    };
    fetchData();
  }, [user]);

  return { favorites, error, loadFave };
}
