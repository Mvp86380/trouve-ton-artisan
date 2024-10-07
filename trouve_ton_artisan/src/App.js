import React from "react";
import {Routes, Route} from "react-router-dom";
// pages
import Header from "./asset/component/Header";
import Home from "./asset/page/Home";
import Batiment from './asset/page/Batiment';
import Services from './asset/page/Service';
import Fabrication from "./asset/page/fabrication"
import Alimentation from './asset/page/Alimentation';
import ArtisanDetail from './asset/page/ArtisanDetail';
import SearchResult from './asset/page/SearchResults';
import NoFound from './asset/page/NoFound';
import Footer from "./asset/component/Footer";
import Mention from './asset/page/Mention';
import Donnees from './asset/page/Donnees';
import Accessibilite from './asset/page/Accessibilite';
import Cookies from './asset/page/Cookies';

function App() {
  return (
    <div className="App">
      <Header/>
      
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Batiment" element={<Batiment/>}></Route>
      <Route path="/Services" element={<Services/>}></Route>
      <Route path="/Fabrication" element={<Fabrication/>}></Route>
      <Route path="/Alimentation" element={<Alimentation/>}></Route>
      <Route path="/artisan/:id" element={<ArtisanDetail/>}></Route>
      <Route path="/search-results" element={<SearchResult/>}></Route>
      <Route path="*" element={<NoFound/>}></Route>
      <Route path="/Mention" element={<Mention/>}></Route>
      <Route path="/Donnees" element={<Donnees/>}></Route>
      <Route path="/Accessibilite" element={<Accessibilite/>}></Route>
      <Route path="/Cookies" element={<Cookies/>}></Route>
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;
