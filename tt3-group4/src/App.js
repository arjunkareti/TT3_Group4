import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, NavLink,Link, Route, Switch } from 'react-router-dom';

//Components
import TransactionHistory from './components/transactionHistory/TransactionHistory'
import UserInfor from './components/UserInfor'
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
          <Route  exact path="/CashAssets" component={CashAssets}></Route>
          <Route  exact path="/TransactionHistory" component={TransactionHistory}></Route>
          <Route  exact path="/Logout" component={Logout}></Route>
          <Route  exact path="/" component={UserInfor}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
