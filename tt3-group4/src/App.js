import { BrowserRouter, Switch ,Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TransactionHistory from './components/transactionHistory/TransactionHistory'
import LoginPage from './components/LoginPage';
import SignUp from "./components/SignUp"
import Nav from './components/nav.components';
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Header />

    <Nav/>
    <Switch>
    <Route exact path="/login" component={LoginPage}/>
    <Route exact path="/signup" component={SignUp}/>
    </Switch>

    <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
