
import {Routes, Route} from 'react-router-dom'

import MainLayout from './components/layout/LayoutMain'
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout nowTitle="레이아웃" />}
        />
        
        </Routes>
    </div>
  );
}

export default App;
