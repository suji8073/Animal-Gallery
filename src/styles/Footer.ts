import styled from "@emotion/styled";
import { fonts } from "./themes/fonts";
import { FaAdn } from "react-icons/fa";
import { colors } from "./themes/colors";

export const Footer = styled.div`
  width: 100%;
  height: 450px;

  display: flex;
  align-items: center;

  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 0%;
  background-image: url("https://cdn.imweb.me/thumbnail/20230111/f180c02992a97.png");
`;

export const Container = styled.div`
  width: 90%;
  padding: 50px 0px 0px 30px;

  text-align: left;
`;

export const Body = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const FlexOne = styled.div`
  flex: 1;
`;

export const LogoView = styled.a`
  display: inline-block;
  margin-bottom: 20px;
`;

export const Logo = styled(FaAdn)`
  width: 50px;
  height: 50px;
  color: ${colors.white};
`;

export const DataItem = styled.div`
  ${fonts.regular10};
  color: ${colors.white};
  margin-bottom: 8px;
`;

export const BottomText = styled.div`
  ${fonts.regular8};
  color: ${colors.gray_30};
  margin: 10px 0px;
`;
