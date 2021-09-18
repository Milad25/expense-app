import { useState } from 'react';
import TransActionForm from './TransActionForm';

const OverViewComponent = ({ expense, income, addTransaction }) => {
  const [isShow, setIsShow] = useState(false);
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <div className='topSection'>
        <p>Balance: {income - expense}</p>
        <button
          className={`btn ${isShow && 'cancel'}`}
          onClick={() => {
            setIsShow((prevState) => !prevState);
          }}
        >
          {isShow ? 'Cancel' : 'Add'}
        </button>
      </div>
      {isShow && (
        <TransActionForm
          addTransaction={addTransaction}
          isShow={isShow}
          setIsShow={setIsShow}
        />
      )}
      <div className='resultSection'>
        <div className='expenseBox'>
          Expense <span style={{ color: 'red' }}>{expense}</span>{' '}
        </div>
        <div className='expenseBox'>
          Income <span>{income}</span>
        </div>
      </div>
    </>
  );
};

export default OverViewComponent;
