import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";
import * as S from "./styled";
import Modal from "../modal/index";

function Header() {
  const linkArray: string[] = ["CAT", "DOG", "OTHERS"];
  const [modal, setModal] = useState<boolean>(false);

  const handleOpenModal = () => {
    setModal(!modal);
  };

  return (
    <S.Header id="Header">
      <S.LeftView>
        {linkArray.map((link: string) => {
          return (
            <S.HeaderItem>
              <Link to={`/${link}`} key={link}>
                {link}
              </Link>
            </S.HeaderItem>
          );
        })}
      </S.LeftView>

      <S.LogoView href={"/"}>
        <S.Logo />
      </S.LogoView>

      <S.RightView>
        <HiOutlineMenu onClick={handleOpenModal} size={24} />
      </S.RightView>

      {modal && <Modal handleModal={handleOpenModal} />}
    </S.Header>
  );
}

export default Header;
