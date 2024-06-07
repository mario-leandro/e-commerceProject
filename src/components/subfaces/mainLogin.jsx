import "@/styles/mainLogin.sass";

export default function MainLogin() {
    return (
        <main>
            <div className="main-container">
                <div className="main-content">
                    <div className="form-container">
                        <div className="form-title">
                            <h1>Entrar</h1>
                        </div>

                        <form action="/login" method="post">
                            <div className="input-container">
                                <div className="input-content">
                                    <label htmlFor="email">E-mail</label>
                                    <input type="email" id="email" name="email" required />
                                </div>

                                <div className="input-content">
                                    <label htmlFor="password">Senha</label>
                                    <input type="password" id="password" name="password" required />
                                </div>

                                <div className="check-reminder">
                                    <div className="check">
                                        <input type="checkbox" id="remember" name="remember" />
                                        <label htmlFor="remember">Lembrar-me</label>
                                    </div>

                                    <a className="reminder" href="/forgot-password">Esqueci minha senha</a>
                                </div>
                            </div>

                            <div className="link-container">
                                <p>Não tem conta? <a href="/registrar">Criar conta</a></p>
                            </div>

                            <div className="button-container">
                                <button type="submit">Entrar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}