import Link from "next/link";
import "@/styles/mainRegistrar.sass";

export default function MainRegistrar() {
    return (
        <main>
            <div className="main-container">
                <div className="main-content">
                    <div className="form-container">
                        <div className="form-title">
                            <h1>Criar conta</h1>
                        </div>

                        <form action="/register" method="post">
                            <div className="input-container">
                                <div className="input-content">
                                    <label htmlFor="name">Nome</label>
                                    <input type="text" id="name" name="name" required />
                                </div>

                                <div className="input-content">
                                    <label htmlFor="email">E-mail</label>
                                    <input type="email" id="email" name="email" required />
                                </div>

                                <div className="input-content">
                                    <label htmlFor="password">Senha</label>
                                    <input type="password" id="password" name="password" required />
                                </div>

                                <div className="input-content">
                                    <label htmlFor="confirm-password">Confirmar senha</label>
                                    <input type="password" id="confirm-password" name="confirm-password" required />
                                </div>
                            </div>

                            <div className="link-container">
                                <p>Já tem conta? <Link href="/login">Entrar</Link></p>
                            </div>

                            <div className="button-container">
                                <button type="submit">Criar conta</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}