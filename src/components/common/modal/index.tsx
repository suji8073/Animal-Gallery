import * as S from "./styled";
import { ModalData } from "../../../data/ModalData";

function Modal({ handleModal }: { handleModal: any }) {
  return (
    <S.Background onClick={handleModal}>
      <S.Modal>
        <S.TitleView>
          <S.TitleText>menu</S.TitleText>
          <S.CloseIcon size={30} onClick={handleModal} />
        </S.TitleView>

        {ModalData.map((menu) => {
          const menuItemStyle = { backgroundColor: menu.color };
          const key = menu.title;

          return menu.link ? (
            <S.MenuItemLink
              to={`/${menu.link}`}
              key={key}
              style={menuItemStyle}
            >
              {menu.title}
            </S.MenuItemLink>
          ) : (
            <S.MenuItemA href={menu.url} key={key} style={menuItemStyle}>
              {menu.title}
            </S.MenuItemA>
          );
        })}

        <S.BottomText>Animal Gallery</S.BottomText>
      </S.Modal>
    </S.Background>
  );
}

export default Modal;
