import * as React from 'react';
import { formatMoney, formatDate, posNum, posNumColor } from "./../helpers/helper-functions";


const TransactionListItem = ( {transaction} ) => {
    let color = posNumColor(transaction.transAmt);

    let otherUser = () => {
        return (
            posNum(transaction.transAmt) ?
                <div><span className='text-muted small'>To:</span> {transaction.transTo}</div> :
                <div><span className='text-muted small'>From:</span> {transaction.transFrom}</div>
        )
    };

    return (
        <div className='list-group-item borderGreen'>
            <div className=' flex spaceBetween alignItemsEnd'>
                <div className='flex flexColumn'>
                    <div>{formatDate(transaction.transTime)}</div>
                    <div>{transaction.description}</div>
                    {otherUser()}
                </div>
                <div className='flex flexColumn alignItemsEnd'>
                    <div className={`fontSize1.5 font-weight-bold ${color}`}>{formatMoney(transaction.transAmt)}</div>
                    <div><span className='text-muted small'>Balance:</span> ${formatMoney(transaction.balance)}</div>
                </div>
            </div>
        </div>
    )
};

export default TransactionListItem;