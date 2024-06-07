import "@/styles/footer.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-divs">
                        <div className="footer-infos">
                            <div className="footer-title">
                                <h2>Sobre</h2>
                            </div>

                            <div className="footer-text">
                                <p>Esse projeto foi feito com o intuito de aprender mais a consumir uma API e a manipular elementos(DOM) junto ao Next.JS</p>
                            </div>
                        </div>

                        <div className="footer-infos">
                            <div className="footer-title">
                                <h2>Links</h2>
                            </div>

                            <div className="footer-text">
                                <a href="/">Home</a>
                                <a href="/">Sua conta</a>
                                <a href="/">Sobre</a>
                                <a href="/">Suporte</a>
                            </div>
                        </div>

                        <div className="footer-infos">
                            <div className="footer-title">
                                <h2>Contato</h2>
                            </div>
                            
                            <div className="footer-text">
                                <p>Telefone: (11) 99999-9999</p>
                                <p>Email: example@gmail.com</p>
                            </div>
                        </div>

                        <div className="footer-infos">
                            <div className="footer-title">
                                <h2>Siga o Desenvolvedor</h2>
                            </div>

                            <div className="footer-icons">
                                <a href="https://github.com/mario-leandro" target="_blank">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                                <a href="https://www.linkedin.com/in/dev-marioleandro/" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                                <a href="https://www.instagram.com/mario.leandro085/" target="_blank">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                                <a href="https://twitter.com/Devmarioleandro" target="_blank">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="footer-copy">
                        <p className="footer-copy-text">&copy; 2024 - Todos os direitos reservados</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}