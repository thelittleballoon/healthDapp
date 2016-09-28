import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>health Dapp</h1>
        <ul role="nav">
    		<li><NavLink to="/medicalregister">Medical Register</NavLink></li>
			<li><NavLink to="/prescription">Prescription</NavLink></li>	
        </ul>

		{/* add this */}
        {this.props.children}

      </div>
    )
  }
})
