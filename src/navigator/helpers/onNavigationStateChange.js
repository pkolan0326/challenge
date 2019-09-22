import {getActiveRouteName} from './getActiveRoute';

const warning = [
  '\nFriendly reminder that screen tracking has yet to be implemented.',
  'Disable this message by implementing analytics in "./src/helpers/onNavigationStateChange.js."',
  '\nNow navigating to:',
].join(' ');

export function getOnNavigationStateChange() {
  return {
    onNavigationStateChange: (prevState, currentState, action) => {
      const currentScreen = getActiveRouteName(currentState);
      const prevScreen = getActiveRouteName(prevState);
      if (prevScreen !== currentScreen) {
        // the line below uses the Google Analytics tracker
        // change the tracker here to use other Mobile analytics SDK.
        __DEV__
          ? console.info(
              `%c${warning} ${currentScreen}`,
              'background: #333; color: #fff',
            )
          : null;
      }
    },
  };
}
