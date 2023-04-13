import './App.css';
import Headline from './components/headline/headline';
import { Route, Routes } from 'react-router-dom';
import Main from './components/main/main';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Headline />} />
      <Route path='/main' element={<Main />} />
    </Routes>
  );
}

export default App;
