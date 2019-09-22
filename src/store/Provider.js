import React from 'react';
import {ThemeProvider} from 'styled-components';
import {Provider, connect} from 'react-redux';
import {configureReduxStore} from './redux';

export function AppProvider({children, ...props}) {
  return (
    <Provider store={configureReduxStore()}>
      <ThemeProvider theme={{}}>{children}</ThemeProvider>
    </Provider>
  );
}
