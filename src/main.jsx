import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import router from "./Router.jsx";
import App from './App.jsx';
import { ThemeProvider } from './Context/ThemeContext.jsx';
import ErrorBoundary from './Component/ErrorBoundary.jsx';
import { CartContext, CartProvider } from './Context/CartContext.jsx';


createRoot(document.getElementById('root')).render(

    <ThemeProvider>
      <ErrorBoundary>
        <CartProvider>
          <BrowserRouter>
            <App/>
          </BrowserRouter>
        </CartProvider>
        
      </ErrorBoundary>

    </ThemeProvider>
    
)
