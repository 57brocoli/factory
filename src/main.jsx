import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from '../redux/strore.jsx'
import './assets/css/initialPage.css'
import './assets/css/global.css'
import './assets/css/navbar.css'
import './assets/css/footer.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>
)
