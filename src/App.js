import { Routes, Route } from 'react-router-dom';
import Movie from './screens/Movie';
import Actor from './screens/Actor';
import NavBar from './components/NavBar';

function App() {

  return (
    <div className="App">
<<<<<<< HEAD
      <p>영화와 드라마</p>
      <p>테스트</p>
      <p>확인용</p>

      <p>연습</p>
      <p>하나더</p>
      <p>저도확인했습니다.</p>
=======
      <Routes>
        <Route path="/" element={ <Movie /> } />
        <Route path="/Actor" element={ <Actor /> } />
        <Route path="/NavBar" element={ <NavBar /> } />
      </Routes>
>>>>>>> 6f2acdc1b43762c8b5749d6904a0be1b67e08e5e
    </div>
  );
}

export default App;
