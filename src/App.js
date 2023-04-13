import './App.css';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';
import Main from './components/main/Headline';


function App() {

  return (
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/main' element={<Main />} />
  </Routes>
  );
}

export default App;
