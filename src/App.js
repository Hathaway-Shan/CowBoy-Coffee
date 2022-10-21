import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

import Auth from './components/Auth/Auth';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import ShopDetail from './components/ShopDetail/ShopDetail';
import AboutUs from './components/AboutUs/AboutUs';

function App() {

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/auth/:type" component={Auth} />
        <Route path="/profile/:id" component={Profile} />
        <Route path="/campfire/:id" component={ShopDetail} />
        <Route path="/campfire" component={Home} />
        <Route exact path="/the-posse" component={AboutUs} />
        <Route path="*">
          <Redirect to="/campfire" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
