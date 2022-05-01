import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import Home from "../screens/Home";
import Actor from "../screens/Actor";
import { reset } from "../redux/actions/stateUi";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  const dispatch = useDispatch();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Actor"
          component={Actor}
          options={({ navigation }) => ({
            title: "",
            headerTransparent: true,
            headerBackTitleVisible: false,
            headerTintColor: "#fff",
            headerLeft: () => (
              <TouchableOpacity
                style={styles.arrow_back}
                onPress={() => {
                  navigation.replace("Home");
                  dispatch(reset());
                }}
              >
                <Ionicons name="arrow-back-outline" size={20} color="black" />
              </TouchableOpacity>
            )
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  arrow_back: {
    backgroundColor: "#fff8",
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center"
  }
});
