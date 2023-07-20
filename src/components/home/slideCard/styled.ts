import styled from "@emotion/styled";
import Slider from "react-slick";

import { colors } from "../../../styles/themes/colors";
import { PiCaretCircleLeftBold, PiCaretCircleRightBold } from "react-icons/pi";

export const SlideContainer = styled.div`
  width: 95%;
  margin: auto;
  position: relative;
`;

export const SliderBody = styled(Slider)`
  padding: 10px;
  box-sizing: border-box;
`;

export const PreviousBtn = styled(PiCaretCircleLeftBold)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 10px;
  margin: auto;
  color: ${colors.white};
`;

export const NextBtn = styled(PiCaretCircleRightBold)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  color: ${colors.white};
`;

export const ItemImage = styled.img`
  width: 30%;
  height: 300px;
  object-fit: cover;

  border-style: solid;
  border-width: 1px;
`;
