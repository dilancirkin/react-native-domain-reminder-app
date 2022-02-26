import React, {useEffect} from 'react';
import Navigation from './Navigation/Navigation';
import {LogBox} from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);
export default function App() {
  return <Navigation />;
}
