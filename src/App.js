import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import Nav from './components/layouts/Nav';
import Home from './components/pages/Home';
import Footer from './components/layouts/Footer';
import SearchModal from './components/layouts/SearchModal';
import LorR from './components/pages/LorR';
import Product from './components/pages/products/Product';
import Nav2 from './components/layouts/Nav2';

function App() {

  return (
    <div className="App">
      <Router>
        <Nav2 />
        <SearchModal />
        {/* <Nav /> */}
        <Switch>
          {/* <Product /> */}
          <Route exact path='/' children={<Home />} />
          <Route path='/login-signup' children={<LorR />} />
          <Route path='/product' children={<Product />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
