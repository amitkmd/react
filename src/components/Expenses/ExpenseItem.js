import React from 'react';
import ExpenseDate from './ExpenseDate';

import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
    
return (
    <li><Card className="expense-item">
     <ExpenseDate date={props.date} />
    <div className="expense-content">
    <h2>{props.title}</h2>
    </div>
    <div className="expense-price">${props.amount}</div>
    </Card></li>
);
}
export default ExpenseItem;