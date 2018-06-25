import * as React from 'react';

const RadioButtons = (props) => {
    let selected = (val) => props.selected === val;

    return (
        <div className="btn-group btn-group-toggle minWid text-uppercase small" data-toggle="buttons">

            <label className="btn btn-secondary">
                <input type="radio" value="radio1" checked={selected('radio1')} onChange={() => props.onChangeRadio('radio1')}/>
                All
            </label>

            <label className="btn btn-secondary">
                <input type="radio" value="radio2" checked={selected('radio2')} onChange={() => props.onChangeRadio('radio2')}/>
                Credit
            </label>

            <label className="btn btn-secondary">
                <input type="radio" value="radio3" checked={selected('radio3')} onChange={() => props.onChangeRadio('radio3')}/>
                Debit
            </label>

        </div>

    )
};

export default RadioButtons;