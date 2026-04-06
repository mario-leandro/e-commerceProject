"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faShoppingCart,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import CategoryDrop from "@/components/categoryDrop.jsx";
import RegisterDrop from "@/components/clientDrop.jsx";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="w-full h-[80px] flex justify-center items-center">
      <div className="w-full flex flex-row justify-between items-center">
        <div className="logo">
          <a href="/">Mario&apos;s Store</a>
        </div>

        <div className="mobile-icons">
          {!menuOpen ? (
            <FontAwesomeIcon id="openMenu" icon={faBars} onClick={toggleMenu} />
          ) : (
            <FontAwesomeIcon
              id="closeMenu"
              icon={faXmark}
              onClick={toggleMenu}
            />
          )}
        </div>

        <div className={`nav-bar ${menuOpen ? "open" : ""}`}>
          <ul className="menu-list">
            <li className="menu-item">
              <a className="menu-link" href="/">
                Início
              </a>
            </li>

            <CategoryDrop />
          </ul>

          <div className="client-options">
            <RegisterDrop />

            <div className="buy-options">
              <Link href="/favoritos">
                <FontAwesomeIcon icon={faHeart} width={30} />
              </Link>

              <Link href="/carrinho">
                <FontAwesomeIcon icon={faShoppingCart} width={30} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
