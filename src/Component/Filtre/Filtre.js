import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import './Filtre.css'

export class Filtre extends Component {
  render() {
    return (
      <div className='placementFiltre'>
          <div className="placementListeFiltre">
            <ul>
              <li>Genres</li>
              <li>Studio</li>
              <li>Année</li>
              <li><FontAwesomeIcon icon={faMagnifyingGlass} size="l" /></li>
            </ul>
          </div>
      </div>
    )
  }
}

export default Filtre