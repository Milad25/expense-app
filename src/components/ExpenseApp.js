import { useEffect, useState } from 'react';
import OverViewComponent from './OverViewComponent';
import Search from './Search';
import TransActionComponent from './TransActionComponent';

const ExpenseApp = () => {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [data, setData] = useState(transactions);

  const changeHandler = (e) => {
    setSearchValue(e.target.value);
    searchTransactions(e.target.value);
  };

  useEffect(() => {
    let expense = 0;
    let income = 0;
    transactions.forEach((t) =>
      t.type === 'expense'
        ? (expense = expense + parseInt(t.amount, 10))
        : (income = income + parseInt(t.amount, 10))
    );
    setIncome(income);
    setExpense(expense);
    setData(transactions);
    searchTransactions(searchValue);
  }, [transactions]);

  const addTransaction = (formValues) => {
    const newTransaction = {
      ...formValues,
      id: Date.now(),
    };
    setTransactions([...transactions, newTransaction]);
  };

  const searchTransactions = (searchValue) => {
    const filteredTransaction = transactions.filter((t) =>
      t.description.toLowerCase().includes(searchValue.toLowerCase())
    );
    
    setData(filteredTransaction);
  };

  return (
    <>
      {' '}
      <section className='container'>
        <OverViewComponent
          expense={expense}
          income={income}
          addTransaction={addTransaction}
        />
        
      </section>
      <Search searchValue={searchValue} changeHandler={changeHandler} />
        <TransActionComponent transactions={data} />
    </>
  );
};

export default ExpenseApp;
