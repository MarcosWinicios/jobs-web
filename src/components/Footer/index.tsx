import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa"
import "./styles.css";
const Footer = () => {
    return (
        <footer>
            <main className="footer-container">

                <section className="footer-navigation">
                    <div className="links-container">
                        <h3 className="footer-title">Título</h3>
                        <nav>
                            <ul>
                                <li><a href="https://jobsdev.netlify.app/">Sobre nós</a></li>
                                <li><a href="https://jobsdev.netlify.app/">Contratar desenvolvedor</a></li>
                                <li><a href="https://jobsdev.netlify.app/">Salário programador</a></li>
                                <li><a href="https://jobsdev.netlify.app/">Blog de programação</a></li>
                                <li><a href="https://jobsdev.netlify.app/">Parceiros</a></li>
                                <li><a href="https://jobsdev.netlify.app/">Perguntas frequentes</a></li>
                                <li><a href="https://jobsdev.netlify.app/">Termos</a></li>
                                <li><a href="https://jobsdev.netlify.app/">Contatos</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="links-container">
                        <h3 className="footer-title">Vagas</h3>
                        <nav>
                            <ul>
                                <li><a href="https://jobsdev.netlify.app/">Vagas desenvolvedor</a></li>
                                <li><a href="https://jobsdev.netlify.app/">Vagas programador JAVA</a></li>
                                <li><a href="https://jobsdev.netlify.app/">Vagas programador PHP</a></li>
                                <li><a href="https://jobsdev.netlify.app/">Vagas programador C#</a></li>
                                <li><a href="https://jobsdev.netlify.app/">Vagas programador NODE.JS</a></li>
                                <li><a href="https://jobsdev.netlify.app/">Vagas programador FRONT-END</a></li>
                                <li><a href="https://jobsdev.netlify.app/">Vagas programador .NET</a></li>
                                <li><a href="https://jobsdev.netlify.app/">Vagas programador ANGULAR</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="links-container">
                        <nav>
                            <br />
                            <ul>
                                <li><a href="https://jobsdev.netlify.app/">Vagas programador JAVASCRIPT</a></li>
                                <li><a href="https://jobsdev.netlify.app/">Vagas programador REACT</a></li>
                                <li><a href="https://jobsdev.netlify.app/">Vagas programador ANDROID</a></li>
                                <li><a href="https://jobsdev.netlify.app/">Vagas programador IOS</a></li>
                                <li><a href="https://jobsdev.netlify.app/">Vagas programador RUBY ON RAILS</a></li>
                                <li><a href="https://jobsdev.netlify.app/">Vagas programador PYTHON</a></li>
                                <li><a href="https://jobsdev.netlify.app/">Vagas remotas programação</a></li>
                                <li><a href="https://jobsdev.netlify.app/">Vagas arquivadas programação</a></li>
                            </ul>
                        </nav>
                    </div>
                </section>
                <section className="company-information">
                    <div className="social-networks">
                        <ul>
                            <li>
                                <a href="https://www.facebook.com/ProgramaThorBr/">
                                    <FaFacebookF size="35" />
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/ProgramaThor">
                                    <FaTwitter size="35" />
                                </a>
                            </li>
                            <li>
                                <a href="https://instagram.com/ProgramaThor">
                                    <FaInstagram size="35" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/company/programathor">
                                    <FaLinkedinIn size="35" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    ProgramaThor © 2021 - Todos os direitos reservados


                </section>
            </main>

        </footer>
    );
}

export default Footer;