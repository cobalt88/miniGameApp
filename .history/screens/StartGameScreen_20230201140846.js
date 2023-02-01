import { View, TextInput, StyleSheet } from "react-native";

function StartGameScreen() {
  return (
    <View>
      <TextInput />
      {/* buttons go here */}
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
});

export default StartGameScreen;
