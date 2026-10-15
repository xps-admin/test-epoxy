import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Home, Layers, Mail } from 'lucide-react'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import GetAQuote from './pages/GetAQuote.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen">
        <nav className="w-60 bg-white border-r border-gray-200 p-4 flex flex-col gap-1">
          <h1 className="text-lg font-bold mb-4 px-2">Test Epoxy</h1>
          <Link to="/home" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 text-sm font-medium"><Home className="w-4 h-4" />
            Home
          </Link>
          <Link to="/services" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 text-sm font-medium"><Layers className="w-4 h-4" />
            Services
          </Link>
          <Link to="/get-a-quote" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 text-sm font-medium"><Mail className="w-4 h-4" />
            Request Quote
          </Link>
        </nav>
        <main className="flex-1 overflow-auto p-8">
          <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/get-a-quote" element={<GetAQuote />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}