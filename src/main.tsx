import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import App from './App.tsx'
import './index.css'
import Test from './Test.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<Test />} />
      </Route>
      <Route element={<App />}>
        <Route path='/test' element={<Test />} />
      </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
