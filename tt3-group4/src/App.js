import './App.css';
import BuySellAsset from './components/transactionHistory/BuySellAsset';
import TransactionHistory from './components/transactionHistory/TransactionHistory'

function App() {
  return (
    <div className="App">
      <TransactionHistory />
      <BuySellAsset />
    </div>
  );
}

export default App;
