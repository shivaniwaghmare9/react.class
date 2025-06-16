
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import LoginContex from './Logincontext.jsx'
createRoot(document.getElementById('root')).render(
    <LoginContex>
       <App />
    </LoginContex>
      
    

       
     
)
