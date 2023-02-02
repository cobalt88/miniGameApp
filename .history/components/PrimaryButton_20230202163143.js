import { View, Text, Pressable } from "react-native";

function PrimaryButton({ children }) {
  function pressHandler() {
    console.log("pressed the main button")
  }
  return (
    <Pressable onPress={} >
      <View>
        <Text>{children}</Text>
      </View>
    </Pressable>
  );
}

export default PrimaryButton;
