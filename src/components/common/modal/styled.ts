import styled from "@emotion/styled";
import { HiXCircle } from "react-icons/hi";
import { fonts } from "../../../styles/themes/fonts";
import { colors } from "../../../styles/themes/colors";
import { Link } from "react-router-dom";

export const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: block;
  z-index: 999;
  background-color: rgb(0, 0, 0, 0.7);
  transition: all 1s ease-in-out;

  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  background-color: white;
  width: 60%;
  height: 50%;
  z-index: 99;

  position: absolute;
  transform: translateX(-50%) translateY(-50%);

  top: 50%;
  left: 50%;

  border-radius: 10px;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
`;

export const TitleView = styled.div`
  position: relative;

  padding: 20px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
`;

export const TitleText = styled.div`
  ${fonts.bold16}
`;
export const CloseIcon = styled(HiXCircle)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;

  margin: auto;

  color: ${colors.gray_30};
`;

export const MenuItemLink = styled(Link)`
  height: 30px;
  padding: 10px;

  text-decoration: none;
  border-bottom-width: 1px;
  border-bottom-style: solid;

  display: flex;
  align-items: center;
  justify-content: center;

  & > a {
    text-decoration: none;
  }
  ${fonts.medium12}
  color: ${colors.black};
`;

export const MenuItemA = styled.a`
  height: 30px;
  padding: 10px;

  text-decoration: none;
  border-bottom-width: 1px;
  border-bottom-style: solid;

  display: flex;
  align-items: center;
  justify-content: center;

  & > a {
    text-decoration: none;
  }
  ${fonts.medium12}
  color: ${colors.black};
`;

export const BottomText = styled.div`
  width: 100%;
  position: absolute;
  bottom: 20px;

  ${fonts.regular10}
  color: ${colors.gray_60};
`;
