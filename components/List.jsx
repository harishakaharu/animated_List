import { IMAGE_H } from "../styles/ListItem.style";
import ListItems from "./ListItems";
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
} from "react-native-reanimated";
export default function List({ images }) {
  const scrollY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (e) => (scrollY.value = e.contentOffset.y),
  });
  return (
    <>
      <Animated.ScrollView
        scrollEventThrottle={16}
        contentContainerStyle={{
          paddingBottom: 4000,
        }}
        onScroll={scrollHandler}
        snapToInterval={IMAGE_H.max}
      >
        {images.map((data, index) => (
          <ListItems
            key={data.picture}
            imageItem={data}
            scrollY={scrollY}
            index={index}
          />
        ))}
      </Animated.ScrollView>
    </>
  );
}
