import React, {useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
function NewExpense(props){
    const [isEditing, setIsEditing] = useState(false);
    function saveExpenseDataHandler(enterExpenseData){
        const expenseData={
            ...enterExpenseData,
            id:Math.random().toString(),
        }
        props.onAddExpense(expenseData);
        setIsEditing(false);
        }
    function startEditingHandler(){
        setIsEditing(true);
    }
    function stopEditingHandler(){
        setIsEditing(false);
    }
    return(
        <div className='expense-form-wrapper'>
            {!isEditing && <button onClick={startEditingHandler} className='add-expense-button'>Add New Expenses</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
        </div>
    );
}
export default NewExpense;