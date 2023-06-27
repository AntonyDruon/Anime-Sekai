
import './App.css';
import Navbar from './Component/Navbar/Navbar';

import Footer from './Component/Footer/Footer';
import LecteurMusique from './Component/Musique/LecteurMusique';
import ClassementHebdo from './Component/ClassementHebdo/ClassementHebdo';
import ClassementPersonnage from './Component/ClassementPersonnage/ClassementPersonnage';
import Titre from './Component/Titre/Titre';
import Filtre from './Component/Filtre/Filtre';
import MainAnime from './Component/MainAnime/MainAnime';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <LecteurMusique/>
      <ClassementHebdo/>
      <ClassementPersonnage/>
      <Titre/>
      <Filtre/>
      <MainAnime/>
      <Footer/>
    </div>
  );
}

export default App;
