import { Switch, Route } from 'react-router-dom';
import './App.css';
import { useUser } from './context/UserContext';
import Auth from './components/Auth/Auth';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  const { user } = useUser();
  return (
    <div className="App">
      <Header />
      <Switch>
        {!user && <Route path="/auth/:type" component={Auth} />}
        <Route path="/campfire" component={Home} />
        <Route path='*' component={Auth}/>
      </Switch>
    </div>
  );
}

export default App;
