import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css'
import App from './App.tsx'
import "../index.css"
import { ThemeProvider } from './themeContext/ThemeContext.tsx'; 

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ThemeProvider> 
      <App />
    </ThemeProvider>
  </BrowserRouter>,
)
