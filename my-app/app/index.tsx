

import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";

const Drawer = createDrawerNavigator();

export default function Index() {
  return (
    
    <NavigationContainer independent={true}>
       <Drawer.Navigator initialRouteName="Home">
         <Drawer.Screen name="Home"  component={HomeScreen }/>
       </Drawer.Navigator>
    </NavigationContainer>
    
  );
}
