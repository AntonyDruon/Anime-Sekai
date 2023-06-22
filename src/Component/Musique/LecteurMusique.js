import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight,faArrowLeft,faPlay } from '@fortawesome/free-solid-svg-icons'
import "./LecteurMusique.css"

export class LecteurMusique extends Component {
  render() {
    return (
        <div className='placement'>
            <div className='placement80Pourcent'></div> 
            <div className="placementLecteurTitre">
                <div className='placementLecteur'>
                    <div className='lecteur'>
                        <div className='flecheGauche'><FontAwesomeIcon icon={faArrowLeft} size="2xl" style={{color: "#152232",}} /></div>
                        <div className='play'><FontAwesomeIcon icon={faPlay} size="2xl" style={{color: "#152232",}} /></div>
                        <div className='flecheDroite'><FontAwesomeIcon icon={faArrowRight} size="2xl" style={{color: "#152232",}} /></div>
                    </div>
                </div>
            <div className='placementTitre'>
                    <p>The Midnight : Jason</p>
                </div>
            </div>
        </div>
       
      
    )
  }
}

export default LecteurMusique
