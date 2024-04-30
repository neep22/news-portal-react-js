import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './assets/css/responsive.css'
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './Router/AppRouter';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
        <BrowserRouter>
          <AppRouter/>
        </BrowserRouter>
    </div>
        
        
    </>
  )
}

export default App
