//{
// "phoneNumber": "(+65) 95879660",
// "accountKey": "58cf2a3d-4e73-48c6-a7d1-437e8d70e181",
// "lastName": "Heller",
// "username": "Group4",
// "address": "5124 Kenyatta Rest",
// "email": "group4@techtrek.com",
// "firstName": "Emery",
// "nric": "S08650611B"
//}

//x api key: HGaEmsRTs92KWV1ymCFucerRBGYDzr52rtR3Wpg0

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
    handleOnBuySell(){
        const xApiKey = 'mcOtxKkyOR4OwrbGK0Czq8HRmlMcsQ2G1Er2jfy7'
        const accountKey = '58cf2a3d-4e73-48c6-a7d1-437e8d70e181'
        const axiosConfig = {
        headers: {
            'x-api-key': xApiKey,
        }
        }
        const body = {
        'accountKey': accountKey,
        'orderType': "BUY",
        assetAmount: 0
        }
    
        axios.post('https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/add', body, axiosConfig)
        .then( ({data}) => {
            console.log(data)
        })
    }

    componentDidMount(){
        this.handleOnBuySell()
    }

    render(){
        return (
            <div>
                <h3>hello world</h3>
            </div>
        )
    }
    }

export default BuySellAsset

