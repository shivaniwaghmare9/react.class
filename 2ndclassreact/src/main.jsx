
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/bootstyle.css"
import "./style.css"
//import UserContext from './componenet/UserContext.jsx';
import store from './store.jsx';
import { Provider } from 'react-redux';
createRoot(document.getElementById('root')).render(
//  <UserContext>
//    <App />
//  </UserContext>
 <Provider store={store}>
  <App/>
 </Provider>
    
  
)
