import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, NavLink,Link, Route, Switch } from 'react-router-dom';

//Components
import TransactionHistory from './components/transactionHistory/TransactionHistory'
import UserInfor from './components/UserInfor'
import CashAssets from './components/CashAssets/CashAssets'
import ViewCurrentPrice from './components/ViewCurrentPrice/ViewCurrentPrice'
import BuySellAsset from './components/BuySellAsset'
import SignUp from './components/SignUp'
import Login from './components/LoginPage'
import Logout from './components/Logout/Logout'
import NavBar from './components/NavBar'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        {/* <ViewCurrentPrice /> */}
        <Switch>
          <Route  exact path="/" component={Login}></Route>
          <Route  exact path="/CashAssets" component={CashAssets}></Route>
          <Route  exact path="/Login" component={Login}></Route>
          <Route  exact path="/BuySellAsset" component={BuySellAsset}></Route>
          <Route  exact path="/TransactionHistory" component={TransactionHistory}></Route>
          <Route  exact path="/Logout" component={Logout}></Route>
          <Route  exact path="/UserInfo" component={UserInfor}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
