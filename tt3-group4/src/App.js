import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TransactionHistory from './components/transactionHistory/TransactionHistory'
import CashAssets from './components/CashAssets/CashAssets'

function App() {
  return (
    <div className="App">
      <TransactionHistory />
      <CashAssets />
    </div>
  );
}

export default App;
