import { Routes , Route } from 'react-router-dom';
import Main from './screens/Main';
import Movie from './screens/Movie';
import Actor from './screens/Actor';
import NavBar from './components/layout/NavBar';
import Footer from './components/Footer';
// import ActorContent from './components/ActorContent';
// import ActorSearch from './components/ActorSearch';
// import ActorSearchResult from './components/ActorSearchResult';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Main /> } />
        <Route path="/NavBar" element={ <NavBar /> } />
        <Route path="/Movie" element={ <Movie /> } />
        
        <Route path="/Actor" element={ <Actor /> } />
        {/* <Route path="/ActorContent" element={ <ActorContent /> } />
        <Route path="/ActorSearch" element={ <ActorSearch /> } />
        <Route path="/ActorSearchResult" element={ <ActorSearchResult /> } /> */}
        <Route path="/Footer" element={ <Footer /> } />
      </Routes>
    </div>
  );
}

export default App;
