"use client"

import Link from 'next/link';
import { useState } from 'react';

export default function RegisterDrop() {
    const [registerMenu, setRegisterMenu] = useState(false);

    const toggleRegisterMenu = () => {
        setRegisterMenu(!registerMenu);
    };

    return (
        <div className="register">
            <span id="registerDropdown" onClick={toggleRegisterMenu}>
                Olá, faça seu login
                <br />
                ou cadastre-se
            </span>

            <div id="register-content" style={{ display: registerMenu ? 'flex' : 'none' }}>
                <Link href="/login">Entrar</Link>
                <Link href="/registrar">Criar conta</Link>
            </div>
        </div>
    );
}
