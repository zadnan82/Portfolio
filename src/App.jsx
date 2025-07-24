import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Portfolio from './components/Portfolio';  
import FoodPrivacy from './components/docs/FoodPrivacy';
import FoodTerms from './components/docs/FoodTerms';

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
          <Layout currentPageName="Privacy Policy">
            <FoodPrivacy />
          </Layout>
        } />
        
        <Route path="/food-terms" element={
          <Layout currentPageName="Terms of Service">
            <FoodTerms />
          </Layout>
        } />
      </Routes>
    </Router>
  );
}

export default App;