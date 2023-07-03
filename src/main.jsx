import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.scss';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </Provider>
)