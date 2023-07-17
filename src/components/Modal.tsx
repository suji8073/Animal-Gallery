import { HiXCircle } from "react-icons/hi";
import "../styles/Modal.css";
import { Link } from "react-router-dom";

function Modal({ handleModal }: { handleModal: any }) {
  const menuList = [
    { title: "CAT", color: "#E7A395", link: "CAT" },
    { title: "GITHUB", color: "#F2B987", url: "https://github.com/suji8073/" },
    { title: "BLOG", color: "#DDCDE5", url: "https://suji-sw.tistory.com/" },
    {
      title: "INSTAGRAM",
      color: "#77B9B8",
      url: "https://www.instagram.com/__suu.ji/",
    },
    { title: "HOME", color: "#8DC18A", link: "" },
  ];

  return (
    <div className="Background" onClick={handleModal}>
      <div className="Modal">
        <div className="topView">
          <div className="titleText">menu</div>
          <HiXCircle
            className="CloseIcon"
            size={30}
            color="gray"
            onClick={handleModal}
          />
        </div>

        {menuList.map((menu) => {
          const menuItemStyle = { backgroundColor: menu.color };
          const key = menu.title;

          return menu.link ? (
            <Link
              to={`/${menu.link}`}
              key={key}
              className="menuItem"
              style={menuItemStyle}
            >
              {menu.title}
            </Link>
          ) : (
            <a
              href={menu.url}
              key={key}
              className="menuItem"
              style={menuItemStyle}
            >
              {menu.title}
            </a>
          );
        })}

        <div className="BottomText">Animal Gallery</div>
      </div>
    </div>
  );
}

export default Modal;
