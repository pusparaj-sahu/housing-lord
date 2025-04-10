import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Footer from './footer'
import './footer.css'

const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>
)
