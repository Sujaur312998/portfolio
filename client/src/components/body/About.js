import React, { useEffect } from "react";
import Aos from "aos";
import img from "../image/suja2.jpg";
//import { useHistory } from 'react-router-dom';

const About = () => {
    /* const history = useHistory()
    const callAboutPage = async () => {
        try {
            const res = await fetch("/about", {
                method: 'GET',
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            })
            const data = await res.json()
            console.log(data);
            if (!res.status === 200) {
                throw new Error(res.error)
            }


        } catch (error) {
            console.log(error)
            history.push("/login")
        }
    } */
    useEffect(() => {
        Aos.init({ duration: 2000 });
        //callAboutPage()
    }, []);
    return (
        <div id="about" className="about">
            <div className="container mt-5">
                <div className="row py-3">
                    <div data-aos="fade-right" className="col-md-6 pr-5 ">
                        <img src={img} alt="suja" className="img-fluid rounded" width="80%" height='400px' />
                    </div>
                    <div data-aos="fade-left" className="col-md-6 pl-5  ">
                        <h1 className="mt-5 mb-3 ">
                            I'am <span className="text-warning">Sujaur Rahman</span>
                        </h1>
                        <p className="lead text-justify">Hello I am Sujaur, currently studying at Bangladesh University of Professionals. I am an energetic, ambitiuos person aiming to leverage proven creative thinking and gain new skills daily. I believe I am an enthusiastic and focused individual. I have a clear, logical mind with a practical approach to problem-solving and a drive to see things through to completion. I am eager to be challenged in order to grow and further improve my IT skills.
                        </p>
                        <a
                            href="https://drive.google.com/file/d/19o2qVVIw9FmEpLaj-c8LHlfa7GP_PJod/view?usp=sharing"
                            className="btn btn-outline-primary btn-lg mt-4"
                        >
                            Download CV
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;
