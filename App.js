import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import VideoPage from "./screens/VideoPage";
import MainPage from "./screens/MainPage";

const Stack = createStackNavigator();

const App =() => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainPage" >
        <Stack.Screen name="MainPage" component={MainPage}
        options={{
          headerShown:false,
        }} 
        ></Stack.Screen>
        <Stack.Screen name="VideoPage" component={VideoPage} 
        options={{
          headerShown:false,
        }} 
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

