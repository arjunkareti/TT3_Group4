import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TransactionHistory from './components/transactionHistory/TransactionHistory'
import CashAssets from './components/CashAssets/CashAssets'
import Logout from './components/Logout/Logout'
import {BrowserRouter as Router, NavLink,Link, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <nav class="navbar-brand">
          TT3_Group4
        </nav>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink className="nav-link" activeClassName="active" to = "/Components/CashAssets/CashAssets">Cash/Asset Balance</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to = "/Components/TransactionHistory/TransactionHistory">Transaction History</NavLink>
            </li>
          </ul>
        </div>
        <ul className="navbar-nav justify-content-end">
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to = "/Components/Logout/Logout">Logout</NavLink>
          </li>
        </ul>
      </nav>
        <hr></hr>
        <Switch>
          <Route  exact path="/Components/CashAssets/CashAssets" component={CashAssets}></Route>
          <Route  exact path="/Components/TransactionHistory/TransactionHistory" component={TransactionHistory}></Route>
          <Route  exact path="/Components/Logout/Logout" component={Logout}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
