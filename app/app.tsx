import * as storage from './utils/storage';

import {
  AppNavigator,
  NavigationContainerComposite,
  canExitApp,
  setAppNavigation,
  useBackButtonHandler,
  useNavigationPersistence,
} from './navigators';
import {LogBox, StatusBar, View} from 'react-native';
import React, {useRef} from 'react';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';

import {LocaleProvider} from './components/providers/LocaleProvider';
import {ThemeProvider} from 'styled-components';
import dayjs from 'dayjs';
import {enableScreens} from 'react-native-screens';
import {theme} from './styles/theme';

const relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);

enableScreens();

export const NAVIGATION_PERSISTENCE_KEY = 'NAVIGATION_STATE';

LogBox.ignoreAllLogs(true);

const App = () => {
  const navigationRef = useRef<NavigationContainerComposite>(null);

  setAppNavigation(navigationRef);
  useBackButtonHandler(navigationRef, canExitApp);

  const {initialNavigationState, onNavigationStateChange} =
    useNavigationPersistence(storage, NAVIGATION_PERSISTENCE_KEY);

  return (
    <ThemeProvider theme={theme}>
      <View />
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <StatusBar translucent backgroundColor="transparent" />
        <LocaleProvider>
          <AppNavigator
            ref={navigationRef}
            initialState={initialNavigationState}
            onStateChange={onNavigationStateChange}
          />
        </LocaleProvider>
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default App;
