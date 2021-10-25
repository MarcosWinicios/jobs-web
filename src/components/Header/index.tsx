import React from "react";
import Logo from "../../assets/images/logo.png";
import "./styles.css";
const Header = () => {
    return (
        <header>
            <figure>
                <img src={Logo} alt="Programathor" />
            </figure>
            <nav>
                <a href="">
                    <strong>VER VAGAS</strong>
                </a>
                <a href="">
                    <strong>SOU EMPRESA</strong>
                </a>
                <a href="">
                    <strong>LOGIN</strong>
                </a>
                <a href="">
                    <span>
                        <strong>CADASTRE-SE</strong>
                    </span>
                </a>
            </nav>
        </header>
    );
}

export default Header;