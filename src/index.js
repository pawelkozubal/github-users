import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { GithubProvider } from './context/context';
import { Auth0Provider } from '@auth0/auth0-react'; 

// dev-xpjocd8o4i0s61ba.us.auth0.com
// xgobmFwiUhzZHv3nVtkvT4U808ifOP9S


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
    <Auth0Provider 
    domain='dev-xpjocd8o4i0s61ba.us.auth0.com'
    clientId='xgobmFwiUhzZHv3nVtkvT4U808ifOP9S'
    redirectUri={window.location.origin}
    >
    <GithubProvider>
      <App />
    </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
