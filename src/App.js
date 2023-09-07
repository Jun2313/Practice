import { Routes, Route } from 'react-router-dom';
import Movie from './screens/Movie';
import Actor from './screens/Actor';
import NavBar from './components/NavBar';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Movie /> } />
        <Route path="/Actor" element={ <Actor /> } />
        <Route path="/NavBar" element={ <NavBar /> } />
      </Routes>
    </div>
  );
}

export default App;
