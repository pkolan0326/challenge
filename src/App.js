import React from 'react';
import {createAppContainer} from 'react-navigation';
import {AppNavigator} from './navigator';
import {AppProvider} from './store';

const AppContainer = createAppContainer(AppNavigator);

function App() {
  return (
    <AppProvider>
      <AppContainer />
    </AppProvider>
  );
}

export default App;
