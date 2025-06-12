
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Usercontext from './UserContext.jsx'

createRoot(document.getElementById('root')).render(
    <Usercontext>
      <App />
    </Usercontext>
      
   
    
  
)
