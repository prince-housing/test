import * as React from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { useFlipper } from '@react-navigation/devtools';
import { useReduxDevToolsExtension } from '@react-navigation/devtools';

import AppNavigator from './appNavigator';
import { setNavigator } from '../utils/navigation-services';

export default function App() {
  const navigationRef = useNavigationContainerRef();
  useFlipper(navigationRef);
  useReduxDevToolsExtension(navigationRef);

  const onNavigationReady = React.useCallback(() => {
    setNavigator(navigationRef);
  }, [navigationRef]);

  return (
    <NavigationContainer ref={navigationRef} onReady={onNavigationReady}>
      <AppNavigator />
    </NavigationContainer>
  );
}
