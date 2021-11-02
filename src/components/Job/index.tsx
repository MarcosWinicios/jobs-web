import React, { useEffect, useState } from "react";
import { FaMoneyBillAlt, FaBriefcase, FaMapMarkerAlt, FaBuilding, FaChartBar, FaFileAlt, FaPlane } from "react-icons/fa";
import "../Job/styles.css";
import CompanyImage from "../../assets/images/company-image.png";


const Job = () => {
    const [salary, setSalary] = useState("");
    useEffect(() => {
        var value = 1000;
        setSalary(value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }));
    }, []);


    return (
        <div className="job-container">
            <figure>
                <img src={CompanyImage} alt="company-logo" loading="lazy" width="100" height="100" />
            </figure>
            <div className="container-data-job">
                <h3>Desenvolvedor(a) de Sofware Pleno</h3>
                <div className="items-job">
                    <span className="company">
                        <FaBriefcase className="icon" />
                        Deep Seed Solutions
                    </span>
                    <span className="location">
                        <FaMapMarkerAlt className="icon" />
                        Rio de Janeiro, Rio de Janeiro, Brasil
                    </span>
                    <span className="company-size">
                        <FaBuilding className="icon" />
                        Pequena/média empresa
                    </span>
                    <span className="experience-level">
                        <FaChartBar className="icon" />
                        Pleno
                    </span>
                    <span className="contract-type">
                        <FaFileAlt className="icon" />
                        CLT
                    </span>
                    <span className="accept-outside">
                        <FaPlane className="icon" />
                        Aceita de fora
                    </span>
                    <span className="salary">
                        <FaMoneyBillAlt className="icon" />
                        {salary}
                    </span>
                </div>
                <div className="list-tag-skills">
                    <span className="tag-skill tag">
                        C++
                    </span>
                    <span className="tag-skill tag">
                        Git
                    </span>
                    <span className="tag-skill tag">
                        MySQL
                    </span>
                    <span className="tag-skill tag">
                        POO
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Job;