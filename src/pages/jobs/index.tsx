import React from "react";
import { FaSearch } from "react-icons/fa"
import Header from "components/Header";
import Job from "components/Job";
import "./styles.css";
const Jobs = () => {
    return (
        <>
            <Header />
            <main>
                <section className="presentation">
                    <div>
                        <h1>Vagas para Programadores e Desenvolvedores</h1>
                        <p>Domina alguma linguagem de programação (Front-End, Back-End, Mobile ou Full Stack)?<br />Quer ser contratado como freelancer (PJ), estagiário ou CLT?<br />Então você está no lugar certo!</p>
                        <div className="search-group">
                            <div>
                                <FaSearch color="#000" />
                            </div>
                            <select name="select-skills" id="skills-select">
                                <option value="Todos os Skills">Todos os Skills</option>
                                <option value="Todos os Skills">Front-End</option>
                                <option value="Todos os Skills">Back-End</option>
                                <option value="Todos os Skills">Java</option>
                                <option value="Todos os Skills">HTML</option>
                                <option value="Todos os Skills">CSS</option>
                                <option value="Todos os Skills">MYSQL</option>
                                <option value="Todos os Skills">REACT JS</option>

                                <option value="Todos os Skills">Todos os Skills</option>
                                <option value="Todos os Skills">Front-End</option>
                                <option value="Todos os Skills">Back-End</option>
                                <option value="Todos os Skills">Java</option>
                                <option value="Todos os Skills">HTML</option>
                                <option value="Todos os Skills">CSS</option>
                                <option value="Todos os Skills">MYSQL</option>
                                <option value="Todos os Skills">REACT JS</option>

                                <option value="Todos os Skills">Todos os Skills</option>
                                <option value="Todos os Skills">Front-End</option>
                                <option value="Todos os Skills">Back-End</option>
                                <option value="Todos os Skills">Java</option>
                                <option value="Todos os Skills">HTML</option>
                                <option value="Todos os Skills">CSS</option>
                                <option value="Todos os Skills">MYSQL</option>
                                <option value="Todos os Skills">REACT JS</option>

                                <option value="Todos os Skills">Todos os Skills</option>
                                <option value="Todos os Skills">Front-End</option>
                                <option value="Todos os Skills">Back-End</option>
                                <option value="Todos os Skills">Java</option>
                                <option value="Todos os Skills">HTML</option>
                                <option value="Todos os Skills">CSS</option>
                                <option value="Todos os Skills">MYSQL</option>
                                <option value="Todos os Skills">REACT JS</option>
                            </select>
                        </div>
                    </div>
                </section>
                <section className="jobs-list">
                    <Job />
                </section>
            </main>
        </>
    );
}

export default Jobs;
