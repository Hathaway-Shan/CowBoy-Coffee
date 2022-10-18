import './AboutUs.css';

export default function AboutUs() {
  return (
    <div className="about-us">
      <h1>Meet The Cowboy Coffee Posse</h1>
      <div className="dev-container">
        <div className="dev">
          <img className='dev-img' src={`${process.env.PUBLIC_URL}/cowboys/olivia.jpg`} />
          <span className="dev-name">Olivia Pasion</span>
          <a className="site-link" href='https://github.com/Olivia-Pasion'>GitHub</a>
          <a className="site-link" href='https://www.linkedin.com/in/olivia-pasion/'>LinkedIn</a>
        </div>
        <div className="dev">
          <img className='dev-img' src={`${process.env.PUBLIC_URL}/cowboys/shan.png`} />
          <span className="dev-name">Shan Hathaway</span>
          <a className="site-link" href='https://github.com/Hathaway-Shan'>GitHub</a>
          <a className="site-link" href='https://www.linkedin.com/in/shan-hathaway/'>LinkedIn</a>
        </div>
        <div className="dev">
          <img className='dev-img' src={`${process.env.PUBLIC_URL}/cowboys/dave.jpg`} />
          <span className="dev-name">Dave Fisher</span>
          <a className="site-link" href='https://github.com/davejfish'>GitHub</a>
          <a className="site-link" href='https://www.linkedin.com/in/davefisher88/'>LinkedIn</a>
        </div>
      </div>
    </div>
  );
}
