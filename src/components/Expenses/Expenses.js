import React, {useState} from 'react';
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
import ExpensesChart from './ExpensesChart';
import Card from '../UI/Card';
import './Expenses.css';
function Expenses(props){
    const [filteredYear, setFilteredYear] = useState('2020');
    function filterChangeHandler(selectedYear){
        setFilteredYear(selectedYear);
    }
    const filteredExpenses = props.items.filter(expense =>{
        return expense.date.getFullYear().toString() === filteredYear;
    });
    
    return(
        <Card className="expenses-wrap">
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpenseList items={filteredExpenses} />
        
        </Card>
    );
}
export default Expenses;