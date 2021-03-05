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

//{
//    "price": 33.36,
//    "assetSymbol": "TTK",
//    "timestamp": 1614926040
//}

//x api key: HGaEmsRTs92KWV1ymCFucerRBGYDzr52rtR3Wpg0 (old) 
//           mcOtxKkyOR4OwrbGK0Czq8HRmlMcsQ2G1Er2jfy7 (new)

import React from "react"
import axios from "axios"

class ViewCurrentPrice extends React.Component{
    
    constructor(){
        super()
        this.state = {

            timestamp: new Date(0), //epoch
            assetSymbol: "", //string
            assetPrice: 0, //float

        }
        this.handleOnViewPrice = this.handleOnViewPrice.bind(this)
    }
    
    //no request body (JSON) needed
    handleOnViewPrice(){
        const xApiKey = 'mcOtxKkyOR4OwrbGK0Czq8HRmlMcsQ2G1Er2jfy7'
        //const accountKey = acctKey //'58cf2a3d-4e73-48c6-a7d1-437e8d70e181'
        const axiosConfig = {
        headers: {
            'x-api-key': xApiKey,
        }
        }
        const body = {
        }
    
        axios.post('https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/pricing/current', {}, axiosConfig)
        .then( ({data}) => {
            console.log(data)
        })
        .then(data =>
            this.setState({
            assetSymbol: data.assetSymbol,
            timestamp: data.timestamp,
            assetPrice: data.assetPrice,
            })
        )
    }

    componentDidMount(){
        this.handleOnViewPrice()
    }

    render(){
        
        return (
            <div>
                assetSymbol === "" ?


                <p>Time Done: {this.state.timestamp}</p>//
                <p>Asset Symbol: {this.state.assetSymbol}</p>//
                <p>Asset Price: {this.state.assetPrice}</p>

            </div>
        )
    }
    }

export default ViewCurrentPrice