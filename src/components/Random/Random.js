import useShops from '../../hooks/useShops';
import './Random.css';

export default function Random() {
  const { shops } = useShops();

  const handleRandom = async () => {
  
  // getRandomInt generates a random number between 0 and array.length
    function getRandomInt(min, max) {
      min = Math.ceil(0);
      max = Math.floor(shops.length);
      return Math.floor(Math.random() * (max - min) + min);
    }
  
  // sets getRandomInt as 'i' to generate a random index in the array 
    let i = getRandomInt();
    const randomShop = shops[i];
  
  // immediately redirects user to the random shop detail page
    window.location = `/campfire/${randomShop.id}`;
  };

  return (
    <div className = "random-container">
      <span>get a random shop</span>
      <button className="random-button" onClick={handleRandom}>
        <p>
          Quick Draw
        </p>
      </button>
    </div>
  );
}
