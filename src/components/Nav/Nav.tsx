import React from "react";
import "./Nav.css";
import { ListItem } from "@mui/material";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <div className="nav-wrapper">
        <div>
          <Link to="/">
            <p className="logo">AP</p>
          </Link>
        </div>
        <div className="nav-container">
          <ListItem>
            <Link to="/">Home</Link>
          </ListItem>
        </div>
      </div>
    </div>
  );
};

export default Nav;
