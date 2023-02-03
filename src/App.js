import './App.css';
import AboutPage from './components/About/AboutPage';
import Contact from './components/contact/contact';
import Headers from './components/headers/headers';
import Headline from './components/headline/headline';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <div className="App">
     <Headers/>
      <Routes>
   <Route  exact path='/' element={<Headline/>}/>  
    <Route exact path='/About' element={ <AboutPage/>}/>
    <Route exact path='/Projects' element={<Projects/>}/>
    <Route exact path='/Contact' element={ <Contact/>} />
    <Route exact path='/Footer' element={<Footer/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
