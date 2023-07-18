import * as S from "./styled";
import { LeftData, RightData } from "../../../data/FooterData";

function Footer() {
  return (
    <S.Footer id="Footer">
      <S.Container>
        <S.LogoView href={"/"}>
          <S.Logo />
        </S.LogoView>

        <S.Body>
          <S.FlexOne>
            {LeftData.map(({ key, value }, index) => (
              <S.DataItem key={`LeftData${index}`}>
                {key} : {value}
              </S.DataItem>
            ))}
          </S.FlexOne>

          <S.FlexOne>
            {RightData.map(({ key, value }, index) => (
              <S.DataItem key={`RightData${index}`}>
                {key} : {value}
              </S.DataItem>
            ))}
          </S.FlexOne>
        </S.Body>
        <S.BottomText>Copyright ⓒWLB컴퍼니 ｜Design & Hosting by </S.BottomText>
      </S.Container>
    </S.Footer>
  );
}

export default Footer;
