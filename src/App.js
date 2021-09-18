import './App.css';
import ExpenseApp from './components/ExpenseApp';

function App() {
  return (
    <div className='App'>
      <header>
        <h2 style={{marginBottom: '20px'}}>Expense Tracker</h2>
      </header>
      <ExpenseApp />
    </div>
  );
}

export default App;
