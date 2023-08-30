
import { StyleSheet } from 'react-native';
import LoginPage from './login';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ToastProvider } from "react-native-toast-message"; 

import ListScreen from './screens/listScreen';
import PostDetailScreen from './postDetailScreen';

import React, { useState, ToastAndroid } from "react";
//import { NavigationContainer } from "@react-navigation/native";
//import { createStackNavigator } from "@react-navigation/stack";
//import ListScreen from "./screens/listScreen";
//import PostDetailScreen from "./postDetailScreen";
//import LoginPage from "./login"; // Make sure to import the LoginPage component

const AuthStack = createStackNavigator();
const MainStack = createStackNavigator();
const Stack = createStackNavigator();


const AuthNavigator = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="Login" component={LoginPage} />
  </AuthStack.Navigator>
);

const MainNavigator = () => (
  <Stack.Navigator initialRouteName="List">
    <Stack.Screen name="List" component={ListScreen} />
    <Stack.Screen name="PostDetail" component={PostDetailScreen} />
  </Stack.Navigator>
);

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <NavigationContainer>
     
      {isLoggedIn ? (
        <MainNavigator />
      ) : (
        <LoginPage setIsLoggedIn={setIsLoggedIn} />
      )}
    
    </NavigationContainer>
  );
};

export default App;








// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Login">
//         {" "}
//         {/* Set initialRouteName to "Login" */}
//         <Stack.Screen name="Login" component={LoginPage} />{" "}
//         {/* Add the LoginPage screen */}
//         <Stack.Screen name="List" component={ListScreen} />
//         <Stack.Screen name="PostDetail" component={PostDetailScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };
// export default App;



// export default function App() {
//   return (
//     <LoginPage/>
//   );
// }



