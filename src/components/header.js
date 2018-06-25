import * as React from 'react';
import { formatMoney } from "./../helpers/helper-functions";

const Header = (props) => {
    let balance = formatMoney(props.balance);
    return (
        <div className=' navbar navbar-default navbar-fixed-top bgGreenDark colorWhite maxWid'>
            <div className='flex spaceBetween font-weight-bold alignItemsEnd container'>
                <div>Current Balance:</div>
                <div className='fontSize2 alignEnd'>${balance}</div>
            </div>
        </div>
    )
};

export default Header;