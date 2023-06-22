import React, { Component } from 'react'
import './ClassementPersonnage.css'
export class ClassementPersonnage  extends Component {
  render() {
    return (
      <div className='EncadrementBleuPersonnage'>
          <h2>Top 10 Personnages</h2>
          <div className='Liste'>
            <ol>
              <li>Usui</li>
              <li>Misaki</li>
              <li>Akame</li>
              <li>Asuna</li>
              <li>Zero-Two</li>
              <li>Maki</li>
              <li>Kirito</li>
              <li>Kenpachi</li>
              <li>Nezuko</li>
              <li>Miku</li>
            </ol>
          </div>
      </div>
    )
  }
}

export default ClassementPersonnage 