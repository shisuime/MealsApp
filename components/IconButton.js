import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";

const IconButton = ({ icon, color, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <Ionicons
        name={icon}
        size={24}
        color={color}
        style={({ pressed }) => pressed && styles.pressed}
      />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
