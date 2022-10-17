import { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Header</h1>
      <Switch>
        <Route path='/auth/:type' component={Auth} />
      </Switch>
    </div>
  );
}

export default App;
