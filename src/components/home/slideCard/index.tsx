import * as S from "./styled";
import Slider from "react-slick";
import { useRef, useCallback } from "react";
import { SlideImageList } from "../../../data/HomeData";

function SlideCard() {
  const slickRef = useRef<Slider>(null);

  const previous = useCallback(() => slickRef?.current?.slickPrev(), []);
  const next = useCallback(() => slickRef?.current?.slickNext(), []);

  return (
    <S.SlideContainer>
      <S.SliderBody
        ref={slickRef}
        dots={false}
        slidesToShow={3}
        slidesToScroll={1}
      >
        {SlideImageList.map((item: { [key: string]: any }) => (
          <S.ItemImage key={item.alt} src={item.img_url} alt={item.alt} />
        ))}
      </S.SliderBody>
      <S.PreviousBtn size={40} onClick={previous} />
      <S.NextBtn size={40} onClick={next} />
    </S.SlideContainer>
  );
}

export default SlideCard;
