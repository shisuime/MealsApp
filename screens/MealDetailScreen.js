import { useLayoutEffect } from "react";
import {
  Image,
  Text,
  View,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";
import { MEALS } from "../dummyData/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";

const MealDetailScreen = ({ route, navigation }) => {
  const mealId = route.params.mealId;
  //   console.log(mealId, "mealid");

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const headerButtonPressHandler = () => {
    console.log("pressed");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={"star"}
            color={"white"}
            onPress={headerButtonPressHandler}
          />
        );
      },
    });
  }, [navigation, headerButtonPressHandler]);
  return (
    <ScrollView style={styles.rootContainer}>
      <View>
        <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealDetails
          duration={selectedMeal.duration}
          complexity={selectedMeal.complexity}
          affordability={selectedMeal.affordability}
        />
        <View style={styles.listOuter}>
          <View style={styles.listContainer}>
            <Subtitle>Ingredients</Subtitle>
            <List data={selectedMeal.ingredients} />
            <Subtitle>Steps</Subtitle>
            <List data={selectedMeal.steps} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 12,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
  },
  listOuter: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
