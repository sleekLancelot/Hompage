import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './css/App.css';
import Nav from './components/layouts/Nav';
import Home from './components/pages/Home';
import Footer from './components/layouts/Footer';
import SearchModal from './components/layouts/SearchModal';
import LorR from './components/pages/LorR';
import Product from './components/pages/products/Product';

function App() {

  return (
    <div className="App">
      <Router>
        <SearchModal />
        <Nav />
        <Switch>
          <Route exact path='/' children={<Home />} />
          <Route path='/login-register' children={<LorR />} />
          <Route path='/product' children={<Product />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
