import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './TransactionHistory.css'

import Table from 'react-bootstrap/Table'

const TransactionHistory = props => {
  
 
  const [transactionHistory, setTransactionHistory] = useState([])


  useEffect( () => {
    const xApiKey = 'mcOtxKkyOR4OwrbGK0Czq8HRmlMcsQ2G1Er2jfy7'
    const accountKey = '58cf2a3d-4e73-48c6-a7d1-437e8d70e181'
    const axiosConfig = {
      headers: {
        'x-api-key': xApiKey,
      }
    }
    const body = {
      'accountKey': accountKey
    }

    axios.post('https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/view', body, axiosConfig)
      .then( ({data}) => {
        console.log(data)
        setTransactionHistory(data)
      })
  }, [])

  return (
    <div className="transactionContainer">
      <h1>Transaction History</h1>
      <Table striped bordered hover >
        <thead>
          <tr>
            <th>Transaction#</th>
            <th>Transaction Date</th>
            <th>Asset</th>
            <th>Order Type</th>
            <th>Asset Amount</th>
            <th>Asset Price</th>
            <th>Cash Amount (SGD$)</th>
          </tr>
        </thead>
        <tbody>
          { transactionHistory.map( transaction => {
            return (
              <tr key={transaction.transactionId}>
                <td>{transaction.transactionId}</td>
                <td>{transaction.timestamp}</td>
                <td>{transaction.assetSymbol}</td>
                <td>{transaction.orderType}</td>
                <td>{transaction.assetAmount}</td>
                <td>{transaction.assetPrice}</td>
                <td>{transaction.cashAmount}</td>
              </tr>
            )
          } ) }
        </tbody>
      </Table>
    </div>
  )
}

export default TransactionHistory