import { StyleSheet } from "react-native";
export const IMAGE_H = { max: 300, min: 100 };
export const TITLE_FONT_S = { max: 30, min: 0 };
const listItemStyle = StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0c0a0a50",
  },
  img: { height: IMAGE_H.min, resizeMode: "cover", flex: 1, width: "100%" },
  txt: { color: "white", fontWeight: "bold", fontSize: TITLE_FONT_S.min },
  stxt: { color: "white", fontWeight: "bold", fontSize: 20 },
});
export default listItemStyle;
