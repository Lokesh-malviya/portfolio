import React,{useState} from 'react'
import './qualification.css'
const Qualification = () => {
    
    const [toggleState,setToggleState] = useState(1);
    const toggleTab = (index)=>{
        setToggleState(index);
    }
    
  return (
    <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personel journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState ===1 ? "qualification__button button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
                    <i className="uil uil-graduation-cap qualification__active qualification__icon"></i>{" "}
                    Education
                </div>
                <div className={toggleState ===2 ? "qualification__button button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
                    <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
                    
                    Experience
                </div>
            </div>
            <div className="qualification__section">
                <div className={toggleState === 1?"qualification__content qualification__content-active"
                : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Artificial Intelligence and Machine learning</h3>
                            <span className="qualification__subtitle">RCOEM - Institute</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>{" "}2021 -present
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Senior Secondary Education</h3>
                            <span className="qualification__subtitle">Kendriya Vidayalaya - Kamptee</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>{" "}2018 - 2020
                            </div>
                        </div>
                        
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Secondary Education</h3>
                            <span className="qualification__subtitle">Kendriya Vidayalaya - Kamptee</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>{" "}2013 -2018
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Primary Education</h3>
                            <span className="qualification__subtitle">Marie Poussepin's Academy</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>{" "}2005 - 2012
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div className={toggleState === 2?"qualification__content qualification__content-active"
                : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Reactjs Developer</h3>
                            <span className="qualification__subtitle">Kesowa ventures - Kolkata</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>{" "}2022 - present
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Web Developer | Competative Programmer</h3>
                            <span className="qualification__subtitle">Google Developer Student Club - Rcoem Nagpur</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>{" "}2021 - present
                            </div>
                        </div>
                        
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Contributer</h3>
                            <span className="qualification__subtitle">Hacktoberfest | Google summer of code</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>{" "}2021 -2022
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Team Lead</h3>
                            <span className="qualification__subtitle">Smart india hackathon - Coimbatore</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>{" "}2022
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification
