import { useState } from "react";
import { Link } from "react-router-dom";
import { FaAdn } from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";

import Modal from "./Modal";
import "../styles/Header.css";

function Header() {
  const linkArray: string[] = ["CAT", "DOG", "OTHERS"];
  const [modal, setModal] = useState<boolean>(false);

  const handleOpenModal = () => {
    setModal(!modal);
  };

  return (
    <div className="Header">
      <div className="LeftView">
        {linkArray.map((link: string) => {
          return (
            <span className="item" key={link}>
              <Link to={`/${link}`}>{link}</Link>
            </span>
          );
        })}
      </div>

      <a className="LogoView" href={"/"}>
        <FaAdn className="Logo" color="#62fcdb" />
      </a>

      <div className="RightView">
        <HiOutlineMenu onClick={handleOpenModal} size={24} />
      </div>

      {modal && <Modal handleModal={handleOpenModal} />}
    </div>
  );
}

export default Header;
