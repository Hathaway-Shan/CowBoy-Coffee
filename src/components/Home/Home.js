import { Redirect } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { Favorites } from '../Favorites/Favorites';
import Random from '../Random/Random';

import ShopsView from '../ShopsView/ShopsView';

export default function Home() {
  const { user } = useUser();

  if (!user) {
    return <Redirect to="/auth/sign-up"></Redirect>;
  }

  return (
    <div>
      <h1>Your Campfire</h1>
      <Random />
      <Favorites />
      <ShopsView />
    </div>
  );
}
