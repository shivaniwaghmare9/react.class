
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/bootstyle.css"
import "./style.css"
import UserContext from './componenet/UserContext.jsx';
createRoot(document.getElementById('root')).render(
 <UserContext>
   <App />
 </UserContext>
    
  
)
