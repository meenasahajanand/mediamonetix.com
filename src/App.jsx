import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Career from './pages/Career'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Offer from './pages/Offer'
import Quote from './pages/Quote'
import ServiceDetail from './pages/ServiceDetail'
import CareerApply from './pages/CareerApply'
import SearchArbitrageQuote from './pages/SearchArbitrageQuote'
import SocialMediaMarketingQuote from './pages/SocialMediaMarketingQuote'
import MonetisationQuote from './pages/MonetisationQuote'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service/*" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career/career-openings" element={<Career />} />
          <Route path="/career/apply" element={<CareerApply />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/offer" element={<Offer />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/searcharbitragesquote" element={<SearchArbitrageQuote />} />
          <Route path="/socialmediamarketingquote" element={<SocialMediaMarketingQuote />} />
          <Route path="/monetisationquote" element={<MonetisationQuote />} />
          <Route path="/service/:slug" element={<ServiceDetail />} />
          <Route path="*" element={<h1>404 Page Not Found</h1>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
