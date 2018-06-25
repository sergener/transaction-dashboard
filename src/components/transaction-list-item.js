import * as React from 'react';
import { formatMoney, formatDate, posNum, posNumColor } from "./../helpers/helper-functions";


const TransactionListItem = ( {transaction} ) => {
    let color = posNumColor(transaction.transAmt);

    return (
        <div className='list-group-item borderGreen'>
            <div className=' flex spaceBetween alignItemsEnd'>
                <div className='flex flexColumn'>
                    <div>{formatDate(transaction.transTime)}</div>
                    <div>{transaction.description}</div>
                    <div>{posNum(transaction.transAmt) ? `To: ${transaction.transTo}` : `From: ${transaction.transFrom}`}</div>
                </div>
                <div className='flex flexColumn alignItemsEnd'>
                    <div className={`fontSize1.5 font-weight-bold ${color}`}>{formatMoney(transaction.transAmt)}</div>
                    <div>{posNum(transaction.transAmt) ? transaction.transFrom : transaction.transTo}</div>
                </div>
            </div>
        </div>
    )
};

export default TransactionListItem;