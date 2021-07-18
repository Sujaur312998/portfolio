import React, { useEffect } from "react";
import img from "../image/Suja.jpg";
import {NavLink} from 'react-router-dom'

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import Aos from "aos";
import "aos/dist/aos.css";
import Typical from "react-typical";

const Home = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <div id="home">
            <div className="container">
                <div className="row py-5">
                    <div data-aos="fade-right" className="col-lg-6 col-md-6 mt-5 pt-5 text">
                        <h1 className="text-warning">Hi,</h1>
                        <h1 className="text-dark">
                            I'am <span className="text-info">MD. SUJA</span>
                        </h1>

                        <Typical
                            steps={[
                                "I'am Web Developer",
                                1000,
                                "MERN Stack Developer",
                                1000,
                                "I'am Web Designer",
                                1000,
                            ]}
                            loop={Infinity}
                            wrapper="h1"
                        />
                        <NavLink type="button" className="btn btn-primary mt-3" to="/contact">
                            Contact
                        </NavLink>
                        <br />
                        <br />

                        <a
                            className="mr-3"
                            href="https://www.facebook.com/mohammad.suja.96/"
                        >
                            <FacebookIcon style={{ fontSize: 30, color: "black" }} />
                        </a>
                        <a
                            className="mr-3"
                            href="https://www.linkedin.com/in/sujaur-rahman-33331117a/"
                        >
                            <LinkedInIcon style={{ fontSize: 30, color: "black" }} />
                        </a>
                        <a
                            className="mr-3"
                            href="https://github.com/Sujaur312998"
                        >
                            <GitHubIcon style={{ fontSize: 30, color: "black" }} />
                        </a>
                    </div>
                    <div data-aos="fade-left"style={{textAlign:"right"}} className="col-lg-6 col-md-12 image">
                        <img className="rounded mt-4" src={img} alt='Suja' width="50%" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;