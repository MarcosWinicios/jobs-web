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
                <section className="jobs-list-container">
                    <div className="jobs-list-content">
                        <aside className="filters-container">
                            <div className="filter">
                                <h2>Filtrar: </h2>
                                <ul>
                                    <li className="tag"><a href="https://jobsdev.netlify.app/">Todas</a></li>
                                </ul>
                            </div>
                            <div className="filter">
                                <h2>Tipo de Contrato</h2>
                                <ul>
                                    <li className="tag"><a href="https://jobsdev.netlify.app/">CLT</a></li>
                                    <li className="tag"><a href="https://jobsdev.netlify.app/">PJ</a></li>
                                    <li className="tag"><a href="https://jobsdev.netlify.app/">Estágio</a></li>

                                </ul>
                            </div>
                            <div className="filter">
                                <h2>Nível de experiência</h2>
                                <ul>
                                    <li className="tag"><a href="https://jobsdev.netlify.app/">Júnior</a></li>
                                    <li className="tag"><a href="https://jobsdev.netlify.app/">Pleno</a></li>
                                    <li className="tag"><a href="https://jobsdev.netlify.app/">Sênior</a></li>
                                </ul>
                            </div>
                            <div className="filter">
                                <h2>Tamanho da empresa</h2>
                                <ul>
                                    <li className="tag"><a href="https://jobsdev.netlify.app/">Startup</a></li>
                                    <li className="tag"><a href="https://jobsdev.netlify.app/">Grande empresa</a></li>
                                    <li className="tag"><a href="https://jobsdev.netlify.app/">Pequena/média empresa</a></li>
                                </ul>
                            </div>
                            <div className="filter">
                                <h2>Cidade da vaga</h2>
                                <form action="/" method="get">
                                    <input type="text" placeholder="Cidade" />
                                    <button type="submit">
                                        <FaSearch />
                                    </button>
                                </form>
                                <ul>
                                    <li className="tag"><a href="https://jobsdev.netlify.app/">Remoto</a></li>
                                    <li className="tag"><a href="https://jobsdev.netlify.app/">Aceita candidato de fora</a></li>
                                </ul>
                            </div>
                        </aside>
                        <ul className="jobs-list">
                            <li>
                                <Job />
                            </li>
                            <li>
                                <Job />
                            </li>
                            <li>
                                <Job />
                            </li>
                            <li>
                                <Job />
                            </li>
                        </ul>
                    </div>
                </section>
                <br />
                <p>Paginação</p>
                <p>Paginação</p>
                <br />

            </main>
            <p>texto</p>
            <p>texto</p>
            <p>texto</p>
            <p>texto</p>
            <p>texto</p>
            <p>texto</p>
            <p>texto</p>
            <p>texto</p>
        </>
    );
}

export default Jobs;
