import * as React from 'react';
import ReactDom from 'react-dom';
import { reduceBalance } from "./helpers/helper-functions";
import Header from "././components/Header"
import TransactionList from "./components/transaction-list";
import RadioButtons from "./components/radio";

const url = 'http://technicalchallenge-env.tmqmrias2g.us-east-1.elasticbeanstalk.com/transaction/0';


class App extends React.Component {
    data;
    filterData;
    canAdd = true;

    constructor(props) {
        super(props);
        this.state = {
            data: undefined,
            balance: 0,
            canAdd: true,
            selectedRadio: 'radio1'
        };

    }

    componentDidMount() {
        this.fetchData();
        this.balance();
    }

    fetchData() {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.data = data;
                this.filterData = data;
                this.setState({ data: data.slice(0,9) });
                this.setState({ balance: reduceBalance(data, 'transAmt') })
            })
            .catch(error => console.error(error))
    };

    balance() {
        return this.data !== undefined && this.setState({ balance: this.reduceBalance(this.data, 'transAmt')});
    }

    onClick = () => {
        let num = this.state.data.length+10;
        let arr = num >= this.filterData.length ? this.filterData : [...this.filterData.slice(0, num)];

        this.setState({ data: arr });
        this.canAddMore(arr);
    };

    onChangeRadio = (val) => {
        this.setState({ selectedRadio: val });
        this.filterData =
                val === 'radio1' ?
                this.data :
                (this.data.filter(transaction => {
                    return (
                        val === 'radio2' ?
                            transaction.transAmt > 0
                            :
                            transaction.transAmt < 0
                    )
                }))
        ;
        this.setState({ data: this.filterData });
        this.canAddMore(this.filterData);
        };


    canAddMore = (arr) => {
        let add = (arr.length < this.filterData.length);
        this.setState({ canAdd: add });
    };

    body = () => {
        return (
            this.state.data &&
            <div>
                <RadioButtons selected={this.state.selectedRadio} onChangeRadio={this.onChangeRadio}/>
                <TransactionList data={this.state.data} canAdd={this.state.canAdd} onClick={this.onClick} />
            </div>
        )
    };

    render() {
        return (
            <div className='maxWid'>
                <div>
                    <Header balance={this.state.balance} />
                </div>
                <div className='bodyPadding'>
                    { this.body() }
                </div>
            </div>
        )
    }
}

ReactDom.render(<App />, document.getElementById('root'));