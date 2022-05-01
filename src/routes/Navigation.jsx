import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Home from "../screens/Home";
import Actor from "../screens/Actor";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator initialRouteName="Actor">
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
                  navigation.goBack();
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
