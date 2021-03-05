import React from 'react'
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return(
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <nav class="navbar-brand">
        TT3_Group4
      </nav>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <NavLink className="nav-link" activeClassName="active" to = "/Components/CashAssets/CashAssets">Cash/Asset Balance</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to = "/Components/TransactionHistory/TransactionHistory">Transaction History</NavLink>
          </li>
        </ul>
      </div>
      <ul className="navbar-nav justify-content-end">
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to = "/Components/Logout/Logout">Logout</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar