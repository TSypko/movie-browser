import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from "styled-components";
import { Provider } from 'react-redux';
import { GlobalStyles } from './GlobalStyles';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { theme } from './theme';
import store from './store';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
