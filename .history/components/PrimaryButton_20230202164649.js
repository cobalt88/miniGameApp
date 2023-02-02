import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children }) {
  function pressHandler() {
    console.log("pressed the main button");
  }
  return (
    <Pressable onPress={pressHandler} android_ripple={{ color: "#640233" }}>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 28,
    elevation: 8,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    width: 100,
    margin: "auto",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
