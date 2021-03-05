import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <nav className="navbar-brand">
        TT3_Group4
      </nav>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to = "/UserInfo">User Info</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to = "/BuySellAsset">Buy/Sell</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to = "/CashAssets">Cash/Asset Balance</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to = "/TransactionHistory">Transaction History</NavLink>
          </li>
        </ul>
      </div>
      <ul className="navbar-nav justify-content-end">
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to = "/Logout">Logout</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar