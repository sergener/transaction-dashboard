
export const reduceBalance = (arr, arg) => arr.reduce((sum, val) => {return sum + val[arg]}, 0);

export const formatMoney = (number) => number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

export const formatDate = (time) => {
    let date = new Date(time);
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let year = date.getFullYear();
    let month = months[date.getMonth()];
    let day = date.getDate();
    return month + ' ' + day + ', ' + year;
};

export const posNum = (number) => number < 0;

export const posNumColor = (number) => number < 0 ? 'text-danger' : 'text-success';

