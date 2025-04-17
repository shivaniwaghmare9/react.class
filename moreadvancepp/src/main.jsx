
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import LoginContext from './LoginContext.jsx'
//import UserContext from './UserContext.jsx'

createRoot(document.getElementById('root')).render(
//   <UserContext>
// <App />
//   </UserContext>
   <LoginContext>
    <App />
   </LoginContext>
  
)
