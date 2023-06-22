import React, { Component } from 'react'
import './ClassementHebdo.css'
export class ClassementHebdo extends Component {
  render() {
    return (
      <div className='EncadrementBleu'>
          <h2>Classement Hebdomadaire</h2>
          <div className='Liste'>
            <ol>
              <li>Kaguya-Sama</li>
              <li>Kawaii Dake</li>
              <li>SPYxFAMILY</li>
              <li>Tate no Yuusha</li>
              <li>Tomodachi Game</li>
              <li>Jujutsu Kaisen</li>
              <li>HunterxHunter</li>
              <li>Bleach</li>
              <li>Kimetsu No Yaiba</li>
              <li>Shingeki No Kyojin</li>
            </ol>
          </div>
      </div>
      
    )
  }
}

export default ClassementHebdo