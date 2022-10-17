import React, { useEffect } from 'react';
import { fetchShops } from '../../services/yelp';
import useShops from '../hooks/useShops';

export default function Shops() {
  //test to see is query is doing anything
  useShops();
  return <div>Shops</div>;
}
