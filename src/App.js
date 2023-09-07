import { Routes , Route } from 'react-router-dom';
import Movie from './screens/Movie';
import Actor from './screens/Actor';
import About from './screens/About'
import Story from './screens/Story'
import NavBar from './components/layout/NavBar';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ < Movie /> } />
        <Route path="/Actor" element={ < Actor /> } />
        <Route path="/NavBar" element={ < NavBar /> } />
        <Route path="/About" element={ <About />} />
        <Route path="/Story" element={ <Story />} />
      </Routes>
    </div>
  );
}

export default App;
