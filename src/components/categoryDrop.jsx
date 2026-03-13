import { useState } from "react";
import "@/styles/categoryDrop.sass";
import Link from "next/link";

export default function CategoryDrop() {
  const [dropdownCategory, setDropdownCategory] = useState(false);

  const toggleDropdown = () => {
    setDropdownCategory(!dropdownCategory);
  };

  return (
    <li id="dropdown">
      <span id="categoryMenu" onClick={toggleDropdown}>
        Categorias
      </span>

      <div
        id="categoryMenu-content"
        style={{ display: dropdownCategory ? "flex" : "none" }}
      >
        <Link href="/">Todos os produtos</Link>
        <Link href="/categoria/eletronicos">Eletrônicos</Link>
        <Link href="/categoria/joias">Jóias</Link>
        <Link href="/categoria/roupas">Roupas</Link>
      </div>
    </li>
  );
}
