import React, {useState} from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
const DUMMY_EXPENSES =[
  {
    id:'e1',
    title:'Toilet paper',
    amount:'94',
    date: new Date(2020, 7, 14),
  },
  {
    id:'e2',
    title:'Car Insurance',
    amount:'100',
    date: new Date(2021, 9, 22),
    
  },
  {
    id:'e3',
    title:'Repair TV',
    amount:'60',
    date: new Date(2022, 11, 24),
  },
  {
    id:'e4',
    title:'Repair Car',
    amount:'24.50',
    date: new Date(2021, 3, 12),
  },
  {
    id:'e5',
    title:'Repair TV',
    amount:'120.5',
    date: new Date(2021, 6, 12),
  },
  {
    id:'e6',
    title:'Buy Scooter',
    amount:'250',
    date: new Date(2022, 11, 25),
  },
  {
    id:'e7',
    title:'Sell House',
    amount:'2500',
    date: new Date(2020, 7, 19),
  }
];
function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  function addExpenseHandler(expense){
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }
  return (
    <div className='main'>
  <NewExpense onAddExpense={addExpenseHandler} />
  <Expenses items={expenses} />
  </div>
  );
}

export default App;
