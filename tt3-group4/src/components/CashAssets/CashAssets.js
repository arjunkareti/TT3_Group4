import React, { useEffect, useState } from 'react';
import '../../App.css';
import axios from 'axios';
  
const CashAssets = () =>{

  const xApiKey = 'mcOtxKkyOR4OwrbGK0Czq8HRmlMcsQ2G1Er2jfy7'
  const accountKey = '58cf2a3d-4e73-48c6-a7d1-437e8d70e181'
  const axioConfig = {
    headers:{
      'x-api-key' : xApiKey
    }   
  }
  const body = {
    'accountKey' : accountKey
  }
  const [state,setState] = useState({
    balances: [],
  });

  useEffect(()=>{
    axios.post('https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/balance', body, axioConfig)
    .then( res => {
        console.log(res);
        setState({...state,balances: res.data});
    } );
  },[]);
  
    return (
      <table>
        <tr>
          <th>
            Asset Balance
          </th>
          <th>
            Cash Balance
          </th>
        </tr>
        <tr>
          <th>
            {state.balances.assetBalance}
          </th>
          <th>
          {state.balances.cashBalance}
          </th>
        </tr>
      </table>
      );
}
export default CashAssets;
