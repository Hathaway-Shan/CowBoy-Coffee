import React from 'react';
import { Redirect } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import ShopsView from '../ShopsView/ShopsView';

export default function Home() {
  const { user } = useUser();

  if (!user) {
    return <Redirect to="/auth/sign-up"></Redirect>;
  }

  return (
    <div>
      <h1>Your Campfire</h1>
      <ShopsView />
    </div>
  );
}
