
import './App.css';
import Navbar from './Component/Navbar/Navbar';

import Footer from './Component/Footer/Footer';
import LecteurMusique from './Component/Musique/LecteurMusique';
import ClassementHebdo from './Component/ClassementHebdo/ClassementHebdo';
import ClassementPersonnage from './Component/ClassementPersonnage/ClassementPersonnage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Footer/>
      <LecteurMusique/>
      <ClassementHebdo/>
      <ClassementPersonnage/>
    </div>
  );
}

export default App;
