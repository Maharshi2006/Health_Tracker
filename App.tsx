import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ActivityIndicator, View } from 'react-native';

import { store, persistor } from './src/store';
import { RootStackScreen } from './src/navigation/RootStackScreen';

const LoadingView = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <ActivityIndicator size="large" color="#3B82F6" />
  </View>
);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<LoadingView />} persistor={persistor}>
        <SafeAreaProvider>
          <NavigationContainer>
            <RootStackScreen />
          </NavigationContainer>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
