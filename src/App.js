import './App.css';
import Header from './components/Header/Header.js';

import { Route, Switch } from 'react-router-dom';
import ColorDisplay from './components/ColorDisplay.js';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Switch>
          <Route exact path="/">
            Home
          </Route>
          <Route
            exact
            path="/rgb/:redValue/:greenValue/:blueValue"
            component={ColorDisplay}
          ></Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
