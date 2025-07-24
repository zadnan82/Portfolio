import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from './Layout';
import Portfolio from './components/Portfolio';

// Lazy load document pages (they'll only load when visited)
const FoodPrivacy = lazy(() => import('./components/docs/FoodPrivacy'));
const FoodTerms = lazy(() => import('./components/docs/FoodTerms'));
const CosPrivacy = lazy(() => import('./components/docs/CosPrivacy'));
const CosTerms = lazy(() => import('./components/docs/CosTerms'));
const GiggliPrivacy = lazy(() => import('./components/docs/GiggliPrivacy'));

// Loading component
const DocumentLoading = () => (
  <Layout currentPageName="Loading...">
    <div className="min-h-screen bg-gray-50 py-8 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading document...</p>
      </div>
    </div>
  </Layout>
);

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
        
        {/* Hidden Pages (lazy loaded) */}
        <Route path="/food-privacy" element={
          <Suspense fallback={<DocumentLoading />}>
            <Layout currentPageName="Food Privacy Policy">
              <FoodPrivacy />
            </Layout>
          </Suspense>
        } />
        
        <Route path="/food-terms" element={
          <Suspense fallback={<DocumentLoading />}>
            <Layout currentPageName="Food Terms of Service">
              <FoodTerms />
            </Layout>
          </Suspense>
        } />
        
        <Route path="/cos-privacy" element={
          <Suspense fallback={<DocumentLoading />}>
            <Layout currentPageName="Cosmetic Privacy Policy">
              <CosPrivacy />
            </Layout>
          </Suspense>
        } />
        
        <Route path="/cos-terms" element={
          <Suspense fallback={<DocumentLoading />}>
            <Layout currentPageName="Cosmetic Terms of Service">
              <CosTerms />
            </Layout>
          </Suspense>
        } />
        
        <Route path="/giggli-privacy" element={
          <Suspense fallback={<DocumentLoading />}>
            <Layout currentPageName="Giggli Privacy Policy">
              <GiggliPrivacy />
            </Layout>
          </Suspense>
        } />
        
      </Routes>
    </Router>
  );
}

export default App;