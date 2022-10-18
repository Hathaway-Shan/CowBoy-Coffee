import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Auth from './components/Auth/Auth';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Loading from './components/Loading/Loading';
import Profile from './components/Profile/Profile';
import ShopDetail from './components/ShopDetail/ShopDetail';
import useShops from './hooks/useShops';

function App() {
  const { loading } = useShops();
  return (
    <div className="App">
      <span>{loading ? <Loading /> : <></>}</span>
      <Header />
      <Switch>
        <Route path="/auth/:type" component={Auth} />
        <Route path="/profile/:id" component={Profile} />
        <Route path="/campfire/:id" component={ShopDetail} />
        <Route path="/campfire" component={Home} />
        <Route path="*">
          <Redirect to="/campfire" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
