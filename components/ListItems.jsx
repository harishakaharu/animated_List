import { View, TouchableOpacity, Text } from "react-native";
import listItemStyle, { IMAGE_H, TITLE_FONT_S } from "../styles/ListItem.style";
import Animated, {
  useAnimatedStyle,
  Extrapolate,
  interpolate,
} from "react-native-reanimated";
export default function ListItems({ imageItem, scrollY, index }) {
  const imgAnimatedStyle = useAnimatedStyle(() => {
    const height = interpolate(
      scrollY.value,
      [index * IMAGE_H.max, index * IMAGE_H.max - IMAGE_H.max],
      [IMAGE_H.max, IMAGE_H.min],
      Extrapolate.CLAMP
    );
    return {
      height: height,
    };
  });

  const txtAnimatedStyle = useAnimatedStyle(() => {
    const fontSize = interpolate(
      scrollY.value,
      [index * IMAGE_H.max, index * IMAGE_H.max - IMAGE_H.max],
      [TITLE_FONT_S.max, TITLE_FONT_S.min],
      Extrapolate.CLAMP
    );
    return {
      fontSize,
    };
  });

  return (
    <TouchableOpacity>
      <Animated.Image
        source={imageItem.picture}
        style={[listItemStyle.img, imgAnimatedStyle]}
      ></Animated.Image>
      <View style={listItemStyle.container}>
        <Animated.Text style={[listItemStyle.txt, txtAnimatedStyle]}>
          {imageItem.title}
        </Animated.Text>
        <Text style={listItemStyle.stxt}>{imageItem.subtitle}</Text>
      </View>
    </TouchableOpacity>
  );
}
