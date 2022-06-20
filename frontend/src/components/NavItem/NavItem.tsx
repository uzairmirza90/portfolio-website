import React from "react";
import "../NavItem/NavItem.scss";
import { Link } from "react-router-dom";

interface NavItemProps {
  text: string;
  path?: string;
}

const NavItem: React.FC<NavItemProps> = ({ text, path }) => {
  return (
    <Link className="nav-item" to={`${path}`}>
      <p className="nav-item-text">{text}</p>
    </Link>
  );
};

export default NavItem;
