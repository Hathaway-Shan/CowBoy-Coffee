import useShops from '../../hooks/useShops';
import Loading from '../Loading/Loading';
import ShopCards from '../ShopCards/ShopCards';

export default function ShopsView() {

  const { loading, shops } = useShops();

  return (
    <>
      <span>{loading && <Loading />}</span>
      <ShopCards shops={shops}/>
    </>
  );
  
}
