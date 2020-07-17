import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);