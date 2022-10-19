import useShopDetail from '../../hooks/useShopDetail';
import useShops from '../../hooks/useShops';

export default function Random() {
  const { shops } = useShops();
  const { shopDetail } = useShopDetail();

  const handleRandom = async () => {
    //console.log(shops.length);
    function getRandomInt(min, max) {
      min = Math.ceil(0);
      max = Math.floor(shops.length);
      return Math.floor(Math.random() * (max - min) + min);
    }
    let i = getRandomInt();
    console.log(i);
    console.log(shops[i]);
    console.log(shops);
    return shops[i]; 
  };
    
  

  return (
    <div>
      <button onClick={handleRandom}>Quick Draw</button>
      <span>get a random shop</span>
    </div>
  );
}
