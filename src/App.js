import './App.css';
import Headline from './components/headline/headline';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/main/main';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Headline />} />
      <Route path='/main' element={<Main />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
