import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import MainContent from './components/MainContent';
import AboutAward from './components/AboutAward';
import CriteriaRating from './components/CriteriaRating';
import Jury from './components/Jury';
import Win from './components/Win';
import Position from './components/Position';
import LastJury from './components/LastJury';
import ArticleList from './components/ArticleList';
import ArticleDetail from './components/ArticleDetail';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <Router>
      <div >
        <Navigation />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/about" element={<AboutAward />} />
          <Route path="/winners" element={<Win />} />
          <Route path="/ratings" element={<CriteriaRating />} />
          <Route path="/position" element={<Position />} />
          <Route path="/jury" element={<Jury />} />
          <Route path="/lastjury" element={<LastJury />} />
          <Route path="/articles" element={<ArticleList />} />
          <Route path="/articles/:id" element={<ArticleDetail />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
