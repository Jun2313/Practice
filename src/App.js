import { Routes , Route } from 'react-router-dom';
import Main from './screens/Main';
import Movie from './screens/Movie';
import Actor from './screens/Actor';
import Home from './screens/Home'
import NavBar from './components/layout/NavBar';
import Footer from './components/Footer';
import ActorContent from './components/Contents/ActorContent';
import ActorSearch from './components/Contents/ActorSearch';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ < Main /> } />
        <Route path="/NavBar" element={ <NavBar /> } />
        <Route path="/Movie" element={ <Movie /> } />

        <Route path="/" element={ <Main /> } />
        <Route path="/NavBar" element={ <NavBar /> } />
        <Route path="/Movie" element={ <Movie /> } />
        
        <Route path="/Actor" element={ <Actor /> } />
        <Route path="/ActorContent" element={ <ActorContent /> } />
        <Route path="/ActorSearch" element={ <ActorSearch /> } />
        <Route path="/Footer" element={ <Footer /> } />
      </Routes>
    </div>
  );
}

export default App;
