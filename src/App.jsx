import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Portfolio from './components/Portfolio';  
import FoodPrivacy from './components/docs/FoodPrivacy';
import FoodTerms from './components/docs/FoodTerms';
import CosPrivacy from './components/docs/CosPrivacy';
import CosTerms from './components/docs/CosTerms';

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Portfolio (unchanged) */}
        <Route path="/" element={
          <Layout currentPageName="Portfolio">
            <Portfolio />
          </Layout>
        } />
        
        {/* Hidden Pages (same layout but no nav) */}
        <Route path="/food-privacy" element={
          <Layout currentPageName="Food Privacy Policy">
            <FoodPrivacy />
          </Layout>
        } />
        
        <Route path="/food-terms" element={
          <Layout currentPageName="Food Terms of Service">
            <FoodTerms />
          </Layout>
        } />
        {/* Hidden Pages (same layout but no nav) */}
        <Route path="/cos-privacy" element={
          <Layout currentPageName="Cosmetic Privacy Policy">
            <CosPrivacy />
          </Layout>
        } />
        
        <Route path="/cos-terms" element={
          <Layout currentPageName="Cosmetic Terms of Service">
            <CosTerms />
          </Layout>
        } />
        
      </Routes>
    </Router>
  );
}

export default App;