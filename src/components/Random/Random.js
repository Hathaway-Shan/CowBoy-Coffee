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
    <div className="random-container">
      <span>get a random shop</span>
      <button className="random-button" onClick={handleRandom}>
        <div className="quickDrawContainer">
          <div className="quickDrawText">
            <div className="quickDraw_letter">Q</div>
            <div className="quickDraw_letter">u</div>
            <div className="quickDraw_letter">i</div>
            <div className="quickDraw_letter">c</div>
            <div className="quickDraw_letter">k</div>
            <div className="quickDraw_letter">d</div>
            <div className="quickDraw_letter">r</div>
            <div className="quickDraw_letter">a</div>
            <div className="quickDraw_letter">w</div>
            <div className="quickDraw_letter">!</div>
          </div>
        </div>
      </button>
    </div>
  );
}
