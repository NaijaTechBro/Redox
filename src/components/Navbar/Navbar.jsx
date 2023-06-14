import React from "react";
import logo from "../../assets/redoxlogo.png";
import { RiMenu4Fill } from "react-icons/ri";
import { VscClose } from "react-icons/vsc";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="container">
      <div className="navbar">
      <div className="navbar__logo">
          <img src={logo} alt="" />
        </div>
        <ul className="navbar__links">
          <li className="navbar__links__link">
            <a href="/">Home</a>
          </li>
          <li className="navbar__links__link">
            <a href="/about">About</a>
          </li>
          <li className="navbar__links__link">
            <a href="/crypto-news">Crypto News</a>
          </li>
          <li className="navbar__links__link">
            <a href="/free-resources">Free Resources</a>
          </li>
        </ul>
        <div className="navbar__ctas">
          <a href="#"></a>
          <a href="/">Subscribe</a>
        </div>
        <div className="navbar__toggle">
          {open ? (
            <VscClose
              className="io"
              onClick={() => {
                setOpen(!open);
              }}
            />
          ) : (
            <RiMenu4Fill
              className="io"
              onClick={() => {
                setOpen(!open);
              }}
            />
          )}
        </div>
      </div>
      <div className={`navbar__mobile__menu ${open ? "open" : ""}`}>
        <ul className="navbar__mobile__menu__links">
          <li
            className="navbar__mobile__menu__links__link"
            onClick={() => {
              setOpen(false);
            }}
          >
            <a href="/">Home</a>
          </li>
          <li
            className="navbar__mobile__menu__links__link"
            onClick={() => {
              setOpen(false);
            }}
          >
            <a href="/about">About</a>
          </li>
          <li
            className="navbar__mobile__menu__links__link"
            onClick={() => {
              setOpen(false);
            }}
          >
            <a href="/crypto-news">Crypto News</a>
          </li>
          <li
            className="navbar__mobile__menu__links__link"
            onClick={() => {
              setOpen(false);
            }}
          >
            <a href="/free-resources">Free Resources</a>
          </li>
        </ul>
        <div className="navbar__mobile__menu__ctas">
          <a href="#"></a>
          <a href="/">Subscribe</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
