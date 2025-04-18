
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import UserContext from './UserContext.jsx'
import LoginContext from './LoginContext.jsx'

createRoot(document.getElementById('root')).render(
//    <UserContext>
// <App />
//    </UserContext>
<LoginContext>
    <App/>
</LoginContext>
    
 
)
