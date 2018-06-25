import * as React from 'react';

const MoreButton = (props) => {
    return(
        <div
            className='list-group-item list-group-item-action list-group-item-info text-uppercase textCenter small pointer'
            onClick={props.onClick}
        >
            View More Transactions
        </div>
    )
};

export default MoreButton;