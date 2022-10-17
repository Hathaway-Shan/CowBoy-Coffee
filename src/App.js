import { Switch, Route } from 'react-router-dom';
import './App.css';
import Auth from './components/Auth/Auth';
import { useUser } from './context/UserContext';

function App() {
  const { user } = useUser();
  return (
    <div className="App">
      <h1>Header</h1>
      <Switch>{!user && <Route path="/auth/:type" component={Auth} />}</Switch>
    </div>
  );
}

export default App;
