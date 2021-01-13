import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from './Components/Home/Home';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import ProductDetails from './Components/ProductDetails/ProductDetails';

function App() {
  return (
    <div className="container-lg">
      <Router>
        <Switch>
          <Route path="/ProductDetails=:product_id">
            <ProductDetails/>
          </Route>
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
