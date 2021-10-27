import React from "react";
import { FaBriefcase, FaMapMarkerAlt, FaBuilding, FaChartBar, FaFileAlt, FaPlane } from "react-icons/fa";
import "../Job/styles.css";

const Job = () => {
    return (
        <div className="job-container">
            <h3>Desenvolvedor(a) de Sofware Pleno</h3>
            <div className="items-job">
                <span className="company">
                    <FaBriefcase />
                    Deep Seed Solutions
                </span>
                <span className="location">
                    <FaMapMarkerAlt />
                    Rio de Janeiro, Rio de Janeiro, Brasil
                </span>
                <span className="company-size">
                    <FaBuilding />
                    Pequena/média empresa
                </span>
                <span className="experience-level">
                    <FaChartBar />
                    Pleno
                </span>
                <span className="contract-type">
                    <FaFileAlt />
                    CLT
                </span>
                <span className="accept-outside">
                    <FaPlane />
                    Aceita de fora
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