import React, {useState, useEffect} from 'react'
import "./Navbar.css" 

export default function Navbar() {

  const [toggleMenu,setToggleMenu] = useState(false);
  const [largeur, setLargeur] = useState (window.innerWidth)
  
  const toggleNavSmallScreen = () => {
    setToggleMenu(!toggleMenu);
  }
  useEffect(() => {
    const changeWidth = () => {
      setLargeur(window.innerWidth)
      if(window.innerWidth > 1039){
        setToggleMenu(false)
      }
    }
    
    window.addEventListener('resize', changeWidth);
    return () => {
      window.removeEventListener('resize', changeWidth)
    }
  }, [])
  
  return (
    <nav>
    <div className='logo'>
           <div className="img">
            
           </div>
        </div>
    {(toggleMenu || largeur > 1039) && (
      <React.Fragment>
      
        <div className='positionListe'>
        <ul className="liste">
                <li className="items">Anime</li>
                <li className="items">Manga</li>
                <li className="items">Blog</li>
                <li className="items">Boutique</li>
        </ul>
        </div>
        <div className='positionCoIn'>
            <ul className="connexioninscription">
                <li className="items">Connexion</li>
                <li className="items">Inscription</li>
            </ul>
        </div>
       
        </React.Fragment>
    )}
        
    <div className="positionbtn">
          <button onClick={toggleNavSmallScreen}>BTN</button>
        </div>
        

    </nav>
  )
}
