import useShops from '../../hooks/useShops';
import Loading from '../Loading/Loading';
import './ShopCards.css';

export default function ShopCards() {
  const { shops } = useShops();

  return (
    <div className="card-container">
      {shops.map((shop) => (
        <div key={shop.id}>
          <h2>{shop.name}</h2>
          <span>{shop.location.display_address}</span>
          <span>{shop.phone}</span>
          <img src={shop.image_url} />
        </div>
      ))}
    </div>
  );
}
