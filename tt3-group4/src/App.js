import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, NavLink,Link, Route, Switch } from 'react-router-dom';

//Components
import TransactionHistory from './components/transactionHistory/TransactionHistory'
import CashAssets from './components/CashAssets/CashAssets'
import ViewCurrentPrice from './components/ViewCurrentPrice/ViewCurrentPrice'
import Logout from './components/Logout/Logout'
import NavBar from './components/NavBar'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route  exact path="/Components/CashAssets/CashAssets" component={CashAssets}></Route>
          <Route  exact path="/Components/TransactionHistory/TransactionHistory" component={TransactionHistory}></Route>
          <Route  exact path="/Components/ViewCurrentPrice/ViewCurrentPrice" component={ViewCurrentPrice}></Route>
          <Route  exact path="/Components/Logout/Logout" component={Logout}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
