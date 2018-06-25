import * as React from 'react';
import TransactionListItem from "./transaction-list-item";
import MoreButton from "./more-button";

const TransactionList = (props) => {
    const transactions = props.data.map((transaction, idx) => {
        return (
            <li>
                <TransactionListItem key={idx} transaction={transaction}/>
            </li>
        )
    });

    return (
        <div>
            <ul className='col-md-4 list-group flex center flexColumn minWid w-100 padding0'>
                {transactions}
                {props.canAdd && <MoreButton onClick={props.onClick}/>}
            </ul>
        </div>
    )
};

export default TransactionList