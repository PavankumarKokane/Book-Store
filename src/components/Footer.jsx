import React from 'react'
import "./Footer.scss";
const Footer = () => {
  return (
    <footer>
        <div className="container">
            <p>All copyright reserved @{new Date().getFullYear()}</p>
        </div>
    </footer>
  )
}

export default Footer