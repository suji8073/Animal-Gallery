import styled from "@emotion/styled";
import { FaAdn } from "react-icons/fa";
import { fonts } from "../../../styles/themes/fonts";
import { colors } from "../../../styles/themes/colors";

export const Header = styled.div`
  background-color: white;

  display: flex;
  flex-direction: row;
  position: sticky;
  top: 0;

  width: 100vw;
  height: 60px;

  padding: 30px 0px;
  margin-bottom: 10px;

  border-color: ${colors.black};
  border-bottom-width: 1px;
  border-bottom-style: solid;

  align-items: center;
  justify-content: center;
`;

export const LeftView = styled.div`
  margin-left: 40px;
  width: 300px;
`;

export const HeaderItem = styled.span`
  padding: 20px;
  & > a {
    ${fonts.bold14};
    text-decoration: none;
    color: ${colors.black};
  }
`;

export const LogoView = styled.a`
  flex: 1;
  display: flex;

  justify-content: center;
`;

export const Logo = styled(FaAdn)`
  width: 50px;
  height: 50px;
  color: ${colors.lightGreen};
`;

export const RightView = styled.div`
  margin-right: 40px;
  width: 300px;
  display: flex;
  justify-content: end;
`;
