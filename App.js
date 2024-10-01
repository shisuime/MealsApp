import { StyleSheet, StatusBar, Button } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavouritesScreen from "./screens/FavouritesScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#368dff" },
        headerTintColor: "white",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
        }}
      />
      <Drawer.Screen name="Favourites" component={FavouritesScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      {/* Change 'styles' to 'barStyle' to avoid issues */}
      <StatusBar barStyle="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              // title: "All Categories",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            options={({ route, navigation }) => {
              const categoryId = route.params.categoryId;
              return {
                title: categoryId,
              };
            }}
          />
          <Stack.Screen
            name="MealDetail"
            component={MealDetailScreen}
            options={{
              title: "About the Meal",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
