import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home/Home/Home.jsx'
import MainLayout from './layout/MainLayout.jsx'
import About from './pages/About/About/About.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>

        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
        </Route>

      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
