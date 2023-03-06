import React from "react";
import { View } from "react-native";
import Carousel from "react-native-snap-carousel";
import CarouselCardItem, { SLIDER_WIDTH } from "./CarouselCardItem";
import data from "./data";
const CarouselCards = () => {
  const isCarousel = React.useRef(null);
  return (
    <View>
      <Carousel
        layout="default"
        ref={isCarousel}
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={400}
        autoplay={true}
        loop={true}
        autoplayDelay={0}
      />
    </View>
  );
};
export default CarouselCards;