import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import App from './App.tsx';
import './index.css';
import { Category } from './LeTodo/Category/index.ts';
import { ToDoProvider } from './LeTodo/store/ToDoProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route element={<App />}>
          <Route
            path="/todo"
            element={
              <ToDoProvider>
                <Category />
              </ToDoProvider>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
