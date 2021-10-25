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
                    <a href="">
                        <strong>VER VAGAS</strong>
                    </a>
                    <a href="#">
                        <strong>SOU EMPRESA</strong>
                    </a>
                    <a href="#">
                        <strong>LOGIN</strong>
                    </a>
                    <span>
                        <a href="#">
                            <strong>CADASTRAR-SE</strong>
                        </a>
                    </span>
                </nav>
            </div>
        </header>
    );
}

export default Header;