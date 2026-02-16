import { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ArticlePage from './pages/ArticlePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CategoryPage from "./pages/CategoryPage";
import StoriesPage from "./pages/StoriesPage";
import AboutPage from "./pages/AboutPage";
import BrandCampaignsPage from "./pages/BrandCampaignsPage";
import AdvertisePage from "./pages/AdvertisePage";
import OurImpactPage from "./pages/OurImpactPage";
import TopicsPage from "./pages/Topic";
import PressCoveragePage from "./pages/PressCoveragePage";
import CareersPage from "./pages/CareersPage";
import WatchInspiringVideoPage from "./pages/WatchInspiringVideoPage";
import ContactPage from "./pages/ContactPage";
import Subscriber from "./pages/Subscriber";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <BrowserRouter>
      <Navbar onSearchChange={setSearchTerm} />
      <Routes>
        <Route path="/" element={<Home searchTerm={searchTerm} />} />
        <Route path="/article/:slug" element={<ArticlePage />} />
        <Route path="/category/:slug" element={<CategoryPage/>} />
        <Route path="/stories" element={<StoriesPage/>} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/brand-campaigns" element={<BrandCampaignsPage />} />
        <Route path="/advertise" element={<AdvertisePage />} />
        <Route path="/stories" element={<StoriesPage/>} />
        <Route path="/impact" element={<OurImpactPage />} />
        <Route path="/topics" element={<TopicsPage />} />
        <Route path="/press-coverage" element={<PressCoveragePage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/watch-inspiring-video" element={<WatchInspiringVideoPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/subscribe" element={<Subscriber />} />



      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}


export default App;


