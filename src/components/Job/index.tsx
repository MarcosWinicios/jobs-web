import React from "react";
import { FaBriefcase, FaMapMarkerAlt, FaBuilding, FaChartBar, FaFileAlt, FaPlane } from "react-icons/fa";

const Job = () => {
    return (
        <div className="job-container">
            <h3>Desenvolvedor(a) de Sofware Pleno</h3>
            <div className="items-job">
                <span className="company">
                    <FaBriefcase />
                    <p>Deep Seed Solutions</p>
                </span>
                <span className="location">
                    <FaMapMarkerAlt />
                    <p>Rio de Janeiro, Rio de Janeiro, Brasil</p>
                </span>
                <span className="company-size">
                    <FaBuilding />
                    <p>Pequena/média empresa</p>
                </span>
                <span className="experience-level">
                    <FaChartBar />
                    <p>Pleno</p>
                </span>
                <span className="contract-type">
                    <FaFileAlt />
                    <p>CLT</p>
                </span>
                <span className="accept-outside">
                    <FaPlane />
                    <p>Aceita de fora</p>
                </span>
            </div>
            <div className="list-tag-skills">
                <span className="tag-skill">
                    C++
                </span>
                <span className="tag-skill">
                    Git
                </span>
                <span className="tag-skill">
                    MySQL
                </span>
                <span className="tag-skill">
                    POO
                </span>
            </div>
        </div>
    );
}

export default Job;