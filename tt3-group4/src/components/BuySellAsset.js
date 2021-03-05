import React from "react"
import axios from "axios"
 
class BuySellAsset extends React.Component{
    
    constructor(){
        super()
        this.state = {
            transaction_id: 0,
            orderType: "",
            timestamp: new Date(0),
            assetSymbol: "",
            assetAmount: 0,
            assetPrice: 0,
            cashAmount: 0,
            assetBalance: 0,
            cashBalance: 0
        }
        this.handleOnBuySell = this.handleOnBuySell.bind(this)
    }
    
    //acctKey, orderType, assetAmount
    handleOnBuySell(acctKey, orderType, assetAmount){
        const xApiKey = 'mcOtxKkyOR4OwrbGK0Czq8HRmlMcsQ2G1Er2jfy7'
        const accountKey = acctKey //'58cf2a3d-4e73-48c6-a7d1-437e8d70e181'
        const axiosConfig = {
        headers: {
            'x-api-key': xApiKey,
        }
        }
        const body = {
        'accountKey': accountKey,
        'orderType': orderType,
        'assetAmount': assetAmount
        }
    
        axios.post('https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/add', body, axiosConfig)
        .then( ({data}) => {
            data.json()
        })
        .then(data =>
            this.setState({
            transaction_id: data.transaction_id,
            orderType: data.orderType,
            timestamp: data.timestamp,
            assetSymbol: data.assetSymbol,
            assetAmount: data.assetAmount,
            assetPrice: data.assetPrice,
            cashAmount: data.cashAmount,
            assetBalance: data.assetBalance,
            cashBalance: data.cashBalance
            })
        )
    }
 
    //componentDidMount(){
    //    this.handleOnBuySell(this.props.acctKey, this.props.orderType, this.props.assetAmount)
    //}
 
    render(){
        
        return (
            <div>
                <form onSubmit={this.handleOnBuySell}>
                <input name="assetAmount" placeholder="Enter amount here"></input>
                <select>
                <option value="default">---Choose An Option Below---</option>
                <option value="Buy">Buy</option>
                <option value="Sell">Sell</option>
                </select>
                <button>Submit</button>
                </form>
                {this.state.assetSymbol === "" ?
                null//<h3> Processing... please wait for the order to be complete.</h3>
                :
                <div>
                <h1>Transaction Complete</h1>
                <h3> Your transaction results are as follows:</h3>
                <p>Transaction ID: {this.state.transaction_id}</p>
                <p>Order Type (Buy/Sell): {this.state.orderType}</p>
                <p>Time Done: {new Date(this.state.timestamp).toString()}</p>
                <p>Asset Symbol: {this.state.assetSymbol}</p>
                <p>Asset Amount: {this.state.assetAmount}</p>
                <p>Asset Price: {this.state.assetPrice}</p>
                <p>Cash Amount Spent/Gained: {this.state.cashAmount}</p>
                <p>Asset Balance: {this.state.assetBalance}</p>
                <p>Cash Balance: {this.state.cashBalance}</p></div>}
 
            </div>
        )
    }
    }
 
export default BuySellAsset