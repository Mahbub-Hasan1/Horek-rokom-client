import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Home from './Components/Home/Home';
import PageNotFound from './Components/PageNotFound/PageNotFound';

function App() {
  return (
    <div className="container-lg">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
