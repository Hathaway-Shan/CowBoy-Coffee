
import './AboutUs.css';
import { Redirect } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

export default function AboutUs() {
  const { user } = useUser();
  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }

  return (
    <div className="about-us">
      <h1>Meet The Cowboy Coffee Posse</h1>
      <div className="dev-container bg-cover bg-center">
        <div className="dev">
          <div className="hat-container">
            <img 
              className="hat -rotate-12" 
              src={`${process.env.PUBLIC_URL}/assets/hats/olivia-hat.png`}
            />
          </div>
          <img className='dev-img' src={`${process.env.PUBLIC_URL}/cowboys/olivia.jpg`} />
          <h3 className="dev-name">Olivia Pasion</h3>
          <a className="site-link" href='https://github.com/Olivia-Pasion'>GitHub</a>
          <a className="site-link" href='https://www.linkedin.com/in/olivia-pasion/'>LinkedIn</a>
        </div>
        <div className="dev">
          <div className="hat-container">
            <img className="hat" src={`${process.env.PUBLIC_URL}/assets/hats/shan-hat.png`} />
          </div>
          <img className='dev-img' src={`${process.env.PUBLIC_URL}/cowboys/shan.png`} />
          <h3 className="dev-name">Shan Hathaway</h3>
          <a className="site-link" href='https://github.com/Hathaway-Shan'>GitHub</a>
          <a className="site-link" href='https://www.linkedin.com/in/shan-hathaway/'>LinkedIn</a>
        </div>
        <div className="dev">
          <div className="hat-container">
            <img className="hat" src={`${process.env.PUBLIC_URL}/assets/hats/dave-hat.png`} />
          </div>
          <img className='dev-img' src={`${process.env.PUBLIC_URL}/cowboys/dave.jpg`} />
          <h3 className="dev-name">Dave Fisher</h3>
          <a className="site-link" href='https://github.com/davejfish'>GitHub</a>
          <a className="site-link" href='https://www.linkedin.com/in/davefisher88/'>LinkedIn</a>
        </div>
      </div>
    </div>
  );

}
