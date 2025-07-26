import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import App from './App.tsx';
import './index.css';
import List from './LeTodo/List.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route element={<App />}>
          <Route path="/test" element={<List />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
