import { Dimensions, StatusBar } from 'react-native';

export const SCREEN_DIMENSIONS = Dimensions.get('screen');
export const WINDOW_DIMENSIONS = Dimensions.get('window');

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = SCREEN_DIMENSIONS;
export const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = WINDOW_DIMENSIONS;

export const STATUS_BAR_HEIGHT = StatusBar.currentHeight;
export const NAVBAR_HEIGHT = SCREEN_HEIGHT - WINDOW_HEIGHT;
