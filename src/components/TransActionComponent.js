const TransActionComponent = ({ transactions }) => {
  return (
    <section>
      {transactions.length !== 0 &&
        transactions.map((transaction) => {
          // let borderRight = '';
          // if(transaction.type === 'expense') {
          //   borderRight = '3px solid red'
          // }

          return (
            <div
              key={transaction.id}
              className='transaction'
              style={{
                borderRight: transaction.type === 'expense' && '4px solid red',
              }}
            >
              <span>{transaction.description}</span>
              <span>{transaction.amount}</span>
            </div>
          );
        })}
    </section>
  );
};

export default TransActionComponent;
