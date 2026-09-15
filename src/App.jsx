import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ContactModal from './components/ContactModal'

// Page Components
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import IndustriesPage from './pages/IndustriesPage'
import ProductsPage from './pages/ProductsPage'
import ProductDetailPage from './pages/ProductDetailPage'
import ProjectsPage from './pages/ProjectsPage'
import BlogPage from './pages/BlogPage'
import BlogPostPage from './pages/BlogPostPage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  const [isTalkOpen, setIsTalkOpen] = useState(false)

  const handleOpenTalk = () => {
    setIsTalkOpen(true)
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="app-root">
        <Navbar onOpenTalk={handleOpenTalk} />
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage onOpenTalk={handleOpenTalk} />} />
            <Route path="/about" element={<AboutPage onOpenTalk={handleOpenTalk} />} />
            <Route path="/services" element={<ServicesPage onOpenTalk={handleOpenTalk} />} />
            <Route path="/industries" element={<IndustriesPage onOpenTalk={handleOpenTalk} />} />
            <Route path="/products" element={<ProductsPage onOpenTalk={handleOpenTalk} />} />
            <Route path="/products/:id" element={<ProductDetailPage onOpenTalk={handleOpenTalk} />} />
            <Route path="/projects" element={<ProjectsPage onOpenTalk={handleOpenTalk} />} />
            <Route path="/blog" element={<BlogPage onOpenTalk={handleOpenTalk} />} />
            <Route path="/blog/:slug" element={<BlogPostPage onOpenTalk={handleOpenTalk} />} />
            <Route path="/contact" element={<ContactPage onOpenTalk={handleOpenTalk} />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <Footer />
        <ContactModal isOpen={isTalkOpen} onClose={() => setIsTalkOpen(false)} />
      </div>
    </Router>
  )
}
