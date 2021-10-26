import React from "react";
import Logo from "../../assets/images/logo.png";
import "./styles.css";
const Header = () => {
    return (
        <header>
            <div className="content-header">
                <figure>
                    <img
                        src={Logo}
                        alt="Programathor"
                        width="370"
                        loading="lazy"
                    />
                </figure>
                <nav>
                    <a href="https://programathor.com.br/jobs">
                        <strong>VER VAGAS</strong>
                    </a>
                    <a href="https://programathor.com.br/jobs">
                        <strong>SOU EMPRESA</strong>
                    </a>
                    <a href="https://programathor.com.br/jobs">
                        <strong>LOGIN</strong>
                    </a>
                    <span>
                        <a href="https://programathor.com.br/jobs">
                            <strong>CADASTRAR-SE</strong>
                        </a>
                    </span>
                </nav>
            </div>
        </header>
    );
}

export default Header;