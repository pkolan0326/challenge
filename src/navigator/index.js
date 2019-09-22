import {createStackNavigator} from 'react-navigation-stack';
import * as SCREEN from '../screens';
export * from './helpers';

const MainStack = createStackNavigator(
  {
    Home: {
      screen: SCREEN.HomeScreen,
    },
    Details: {
      screen: SCREEN.DetailsScreen,
    },
  },
  {
    initialRouteName: 'Home',
  },
);

export const AppNavigator = createStackNavigator(
  {
    Main: {
      screen: MainStack,
    },
    Pics: {
      screen: SCREEN.PicsScreen,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);
