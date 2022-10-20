import Loading from '../Loading/Loading';
import ShopCards from '../ShopCards/ShopCards';

export default function ShopsView({ shops, loading, favorites, setFavorites }) {

  return (
    <>
      <span>{loading && <Loading />}</span>
      <ShopCards favorites={favorites} setFavorites={setFavorites} shops={shops}/>
    </>
  );
  
}
