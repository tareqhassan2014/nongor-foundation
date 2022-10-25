import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import { store } from './app/store';
import Message from './components/message/Message';
import './index.css';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App />
                <Message />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
