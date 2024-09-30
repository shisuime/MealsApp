import { View, Text, StyleSheet } from "react-native";

const Subtitle = ({ children }) => {
  return (
    <View style={styles.titleBorderContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 6,
    textAlign: "center",
  },
  titleBorderContainer: {
    padding: 6,
    // margin: 4,
    marginHorizontal: 12,
    marginVertical: 4,
    borderBottomColor: "black",
    borderBottomWidth: 2,
  },
});
