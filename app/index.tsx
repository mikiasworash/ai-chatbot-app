import { Text, View } from "react-native";

// Import your global CSS file
import "../global.css";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-red-500">Welcome to ai-chatbot app</Text>
    </View>
  );
}
