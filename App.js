import { IMAGES } from "./data";
import { View } from "react-native";
import List from "./components/List";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <List images={IMAGES} />
    </View>
  );
}
