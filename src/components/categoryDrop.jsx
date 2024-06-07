import { useState } from 'react';
import "@/styles/categoryDrop.sass";

export default function CategoryDrop() {
    const [dropdownCategory, setDropdownCategory] = useState(false);

    const toggleDropdown = () => {
        setDropdownCategory(!dropdownCategory);
    };

    return (
        <div id="dropdown">
            <span id="categoryMenu" onClick={toggleDropdown}>Categorias</span>

            <div id="categoryMenu-content" style={{ display: dropdownCategory ? 'flex' : 'none' }}>
                <a href="/">Todos os produtos</a>
                <a href="/categoria/eletronicos">Eletrônicos</a>
                <a href="/categoria/joias">Jóias</a>
                <a href="/categoria/roupas">Roupas</a>
            </div>
        </div>
    )
}
