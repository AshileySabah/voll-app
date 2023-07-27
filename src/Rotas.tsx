import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cadastro from "./screens/Cadastro";
import Login from "./screens/Login";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createNativeStackNavigator();

export default function Rotas() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Cadastro" component={Cadastro} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
