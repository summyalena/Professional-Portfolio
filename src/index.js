import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AboutPage from './components/About/AboutPage';
import Contact from './components/contact/contact';
import Headline from './components/headline/headline';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import Blog from './components/Blog/Blog';
import Main from './components/main/main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={ <App />}/>
   <Route  exact path='/Home' element={<Headline/>}/>  
   <Route exact path='/Main' element={<Main/>}/>
    <Route exact path='/About' element={ <AboutPage/>}/>
    <Route exact path='/Projects' element={<Projects/>}/>
    <Route exact path='/Blog' element={<Blog/>}/>
    <Route exact path='/Contact' element={ <Contact/>} />
    <Route exact path='/Footer' element={<Footer/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
