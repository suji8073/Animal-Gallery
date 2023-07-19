import * as S from "./styled";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ScrollCardTitle } from "../../../data/HomeData";

function ScrollCard() {
  return (
    <S.Container>
      <Slider
        dots={false}
        slidesToShow={3}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={2000}
      >
        {Array.from({ length: 4 }, (_, index) => (
          <S.ScrollItem key={index}>
            ✦{"\u2003"}
            {ScrollCardTitle}
          </S.ScrollItem>
        ))}
      </Slider>
    </S.Container>
  );
}

export default ScrollCard;
