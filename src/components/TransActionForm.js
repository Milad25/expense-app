import { useState } from 'react';

const TransActionForm = ({ addTransaction, isShow, setIsShow }) => {
  const [formValues, setFormValues] = useState({
    description: '',
    amount: 0,
    type: '',
  });

  const changeHandler = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const checkValue =
      formValues.description === '' ||
      formValues.amount === '' ||
      formValues.type === ''
        ? true
        : false;

    if (checkValue) {
      alert('Fill input fields');
    } else {
      addTransaction(formValues);
      setFormValues({ type: '', description: '', amount: 0 });
      setIsShow(false);
    }
  };

  return (
    <form
      onSubmit={submitHandler}
      className='formControl'
      // style={{ display: !isShow && 'none' }}
    >
      <input
        type='text'
        name='description'
        value={formValues.description}
        onChange={changeHandler}
        placeholder='description'
      />
      <input
        type='number'
        name='amount'
        value={formValues.amount !== 0 && formValues.amount}
        onChange={changeHandler}
        placeholder='amount'
      />
      <div className='radioBox'>
        <input
          id='expense'
          type='radio'
          value='expense'
          name='type'
          checked={formValues.type === 'expense'}
          onChange={changeHandler}
        />
        <label htmlFor='expense'>Expense</label>

        <input
          id='income'
          type='radio'
          value='income'
          name='type'
          checked={formValues.type === 'income'}
          onChange={changeHandler}
        />
        <label htmlFor='income'>Income</label>
      </div>
      <button className='btn primary' type='submit'>
        Add Transaction
      </button>
    </form>
  );
};

export default TransActionForm;
