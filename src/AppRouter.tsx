import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import App from './App';
import ServicePage from './pages/ServicePage';
import TestimonialsPage from './pages/TestimonialsPage';
import PricingPage from './pages/PricingPage';
import BlogIndex from './pages/BlogIndex';
import BlogPost from './pages/BlogPost';
import ArabicServicePage from './pages/ArabicServicePage';
import SitemapPage from './pages/SitemapPage';
import PageTransition from './components/PageTransition';
import { useHashScroll } from './hooks/useHashScroll';
import { SERVICE_PAGES } from './data/services';
import { BLOG_POSTS } from './data/blog';

function RouterInner() {
  useHashScroll();
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <PageTransition key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={<App />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/ar/services/assignment-help" element={<ArabicServicePage />} />
            <Route path="/sitemap" element={<SitemapPage />} />
            {BLOG_POSTS.map((post) => (
              <Route key={post.slug} path={`/blog/${post.slug}`} element={<BlogPost post={post} />} />
            ))}
            {SERVICE_PAGES.map((s) => (
              <Route key={s.slug} path={`/services/${s.slug}`} element={<ServicePage service={s} />} />
            ))}
          </Routes>
        </PageTransition>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

export default function AppRouter() {
  return <RouterInner />;
}
