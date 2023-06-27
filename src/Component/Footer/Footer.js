import React from 'react'
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare,faTwitterSquare,faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <footer>
      <div className="placementReseaux">
        <div className="alignementReseau">
            <p>Nous suivre :</p>
            <div className="facebook"><FontAwesomeIcon icon={faFacebookSquare} size="2xl" style={{color: "#7859ab",}} /></div>
            <div className="twitter"><FontAwesomeIcon icon={faTwitterSquare} size="2xl" style={{color: "#7859ab",}} /></div>
            <div className="instagram"><FontAwesomeIcon icon={faInstagram} size="2xl" style={{color: "#7859ab",}} /></div>
        </div>
      </div>
      <div className="placementLien">
        <div className="alignementLien">
          <p>Contact</p>
          <p>à propos de nous</p>
          <p>Politique de confidentialité</p>
        </div>
      </div>
    </footer>
  )
}
