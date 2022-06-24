import React from "react";
import "../NavItem/NavItem.scss";
import { Link } from "react-router-dom";

interface NavItemProps {
  text: string;
  path?: string;
}

const NavItem: React.FC<NavItemProps> = ({ text, path }) => {
  // const [userName, setUserName] = React.useState<string>("");

  // React.useEffect(() => {
  //   if (localStorage.getItem("userInfo")) {
  //     setUserName(JSON.parse(localStorage.getItem("userInfo") || "").name);
  //   }
  // }, [localStorage.getItem("userInfo")]);

  return (
    <Link className="nav-item" to={`${path}`}>
      <p className="nav-item-text">{text}</p>
    </Link>
  );
};

export default NavItem;
