import { BrowserRouter, Switch ,Route} from 'react-router-dom';
import './App.css';
import TransactionHistory from './components/transactionHistory/TransactionHistory'
import LoginPage from './components/LoginPage';
import Nav from './components/nav.components';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <TransactionHistory />

    <Nav/>
    <Switch>
    <Route exact path="/login" component={LoginPage}/>
    </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
