import { registerRootComponent } from 'expo';
import App from './App';
import { drizzle } from "drizzle-orm/libsql";
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
export const db = drizzle(process.env.EXPO_PUBLIC_DB_FILE_NAME)

registerRootComponent(App);
