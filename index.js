import { registerRootComponent } from 'expo';
import App from './map-app/App'; // Adjust the path as necessary based on your project structure

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build, the app is registered correctly
registerRootComponent(App);
