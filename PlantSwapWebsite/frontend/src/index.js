import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthContextProvider } from './state/AuthContext';
import App from './App';
import { store} from './store';
import { Provider } from "react-redux"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <AuthContextProvider>
    <App />
    </AuthContextProvider>
    </Provider>
  </React.StrictMode>
);


