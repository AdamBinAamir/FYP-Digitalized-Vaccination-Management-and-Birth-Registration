import React from 'react';
import RootNavigator from './src/Screens/RootNavigator';
import { LogBox } from "react-native"

LogBox.ignoreAllLogs(true)
const App = () => {
  return <RootNavigator />;
};

export default App;