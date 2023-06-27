import React, { Component } from 'react'
import './MainAnime.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

export class MainAnime extends Component {
  render() {
    return (
      <div className="placementMain">
        <div className="placementPremiereLigne">
            <div className="premiereAnime">
                <img src="../../img/kaguya sama.png" alt="" />
                <p>Kaguya-Sama wa Kokurasetai:Ultra Romantic</p>
            </div>
            <div className="deuxiemeAnime">
                <img src="../../img/Kawai.jpg" alt="" />
                <p>Kawaii dake ja Nai Shikimori-san</p>
            </div>
            <div className="troisiemeAnime">
                <img src="../../img/SPYxFAMILY.png" alt="" />
                <p>SPYxFAMILY</p>
            </div>
            <div className="quatriemeAnime">
                <img src="../../img/Tate No Yuusha no Nariagari.jpg" alt="" />
                <p>Tate no Yuusha no Nariagari Saison 2</p>
            </div>
        </div>
        <div className="placementDeuxiemeLigne">
            <div className="premiereAnime">
                <img src="../../img/Tomodachi Game.jpg" alt="" />
                <p>Tomodachi Game</p>
            </div>
            <div className="deuxiemeAnime">
                <img src="../../img/Yuusha, Yamemasu.jpg" alt="" />
                <p>Yuusha, Yamemasu</p>
            </div>
            <div className="troisiemeAnime">
                <img src="../../img/Bleach.png" alt="" />
                <p>Bleach</p>
            </div>
            <div className="quatriemeAnime">
                <img src="../../img/Hunter x hunter.png" alt="" />
                <p>HunterXHunter</p>
            </div>
        </div>
        <div className="placementTroisiemeLigne">
            <div className="premiereAnime">
                <img src="../../img/Shingeki No Kyojin.jpg" alt="" />
                <p>Shingeki No Kyojin: Saison finale Part 2</p>
            </div>
            <div className="deuxiemeAnime">
                <img src="../../img/Jujutsu Kaisen.jpg" alt="" />
                <p>Jujutsu Kaisen</p>
            </div>
            <div className="troisiemeAnime">
                <img src="../../img/Kimetsu no Taiba.jpg" alt="" />
                <p>Kimetsu No Yaiba</p>
            </div>
            <div className="quatriemeAnime">
                <img src="../../img/Ousama Ranking.jpg" alt="" />
                <p>Ousama Ranking</p>
            </div>
        </div>
        <div className="placementPage">
            <div className="placementNumero">
                <p><FontAwesomeIcon icon={faChevronLeft} size="l" style={{color: "#152232",}} /></p>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>...</p>
                <p><FontAwesomeIcon icon={faChevronRight} size="l" style={{color: "#152232",}} /></p>
            </div>
        </div>
    </div>
    )
  }
}

export default MainAnime