import ShopCards from '../ShopCards/ShopCards';

export default function ShopsView({ shops, favorites, setFavorites }) {
  return (
    <>
      <ShopCards favorites={favorites} setFavorites={setFavorites} shops={shops} />
    </>
  );
}
