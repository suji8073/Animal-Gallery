import styled from "@emotion/styled";
import { fonts } from "../../../styles/themes/fonts";
import { colors } from "../../../styles/themes/colors";

export const Container = styled.div`
  width: 100%;

  border-width: 1px;
  border-color: ${colors.gray_50};
  border-top-style: solid;
  border-bottom-style: solid;
`;

export const ScrollItem = styled.div`
  width: 30%;
  margin: 10px auto;

  ${fonts.medium12}
  color:${colors.gray_80};
`;
