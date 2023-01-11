import React,{useState} from 'react'
import './services.css'
const Services = () => {
    const [toggleState,setToggleState] = useState(0);
    const toggleTab = (index)=>{
        setToggleState(index);
    }
  return (
    <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What i offer</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-react services__icon"></i>
                    <h3 className="services__title">Frontend <br />Developer</h3>
                </div>
                <span className="services__button" onClick={()=>toggleTab(1)}>View More<i className="uil uil-arrow-right services__button-icon"></i></span>
                <div className={toggleState === 1?"services__modal active-modal":"services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={()=>toggleTab(0)} className="uil uil-times services__modal-close"></i>
                        <h3 className="services__modal-title">Frontend Developer</h3>
                        <p className="services__modal-description">Services with ore that 1 year of experience. Providing quality work to client and companies.</p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle 
                                services__modal-icon"></i>
                                <p className="services__modal-info">I can develop a full functional website.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle 
                                services__modal-icon"></i>
                                <p className="services__modal-info">I can develope a proper user interface.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle 
                                services__modal-icon"></i>
                                <p className="services__modal-info">I can create ui element interactions.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle 
                                services__modal-icon"></i>
                                <p className="services__modal-info">I can position your company brand</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">Backend <br/> Developer</h3>
                </div>
                <span className="services__button" onClick={()=>toggleTab(2)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>
                <div className={toggleState === 2?"services__modal active-modal":"services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={()=>toggleTab(0)}className="uil uil-times services__modal-close"></i>
                        <h3 className="services__modal-title">Backend Developer</h3>
                        <p className="services__modal-description">Services with ore that 1 year of experience. Providing quality work to client and companies.</p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle 
                                services__modal-icon"></i>
                                <p className="services__modal-info">I can develop a full functional website.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle 
                                services__modal-icon"></i>
                                <p className="services__modal-info">I can develope a proper user interface.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle 
                                services__modal-icon"></i>
                                <p className="services__modal-info">I can create ui element interactions.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle 
                                services__modal-icon"></i>
                                <p className="services__modal-info">I can position your company brand</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-android services__icon"></i>
                    <h3 className="services__title">Android <br/> Developer</h3>
                </div>
                <span className="services__button" onClick={()=>toggleTab(3)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>
                <div className={toggleState === 3?"services__modal active-modal":"services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={()=>toggleTab(0)} className="uil uil-times services__modal-close"></i>
                        <h3 className="services__modal-title">Android Developer</h3>
                        <p className="services__modal-description">Services with ore that 1 year of experience. Providing quality work to client and companies.</p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle 
                                services__modal-icon"></i>
                                <p className="services__modal-info">I can develop a full functional website.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle 
                                services__modal-icon"></i>
                                <p className="services__modal-info">I can develope a proper user interface.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle 
                                services__modal-icon"></i>
                                <p className="services__modal-info">I can create ui element interactions.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle 
                                services__modal-icon"></i>
                                <p className="services__modal-info">I can position your company brand</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-robot services__icon"></i>
                    <h3 className="services__title">Machine <br/> Learning</h3>
                </div>
                <span className="services__button" onClick={()=>toggleTab(4)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>
                <div className={toggleState === 4?"services__modal active-modal":"services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={()=>toggleTab(0)} className="uil uil-times services__modal-close"></i>
                        <h3 className="services__modal-title">Machine Learning</h3>
                        <p className="services__modal-description">Services with ore that 1 year of experience. Providing quality work to client and companies.</p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle 
                                services__modal-icon"></i>
                                <p className="services__modal-info">I can develop a full functional website.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle 
                                services__modal-icon"></i>
                                <p className="services__modal-info">I can develope a proper user interface.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle 
                                services__modal-icon"></i>
                                <p className="services__modal-info">I can create ui element interactions.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle 
                                services__modal-icon"></i>
                                <p className="services__modal-info">I can position your company brand</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">UX/UI <br/> designer</h3>
                </div>
                <span className="services__button" onClick={()=>toggleTab(5)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>
                <div className={toggleState === 5?"services__modal active-modal":"services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={()=>toggleTab(0)} className="uil uil-times services__modal-close"></i>
                        <h3 className="services__modal-title">UX/UI designer</h3>
                        <p className="services__modal-description">Services with ore that 1 year of experience. Providing quality work to client and companies.</p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle 
                                services__modal-icon"></i>
                                <p className="services__modal-info">I can develop a full functional website.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle 
                                services__modal-icon"></i>
                                <p className="services__modal-info">I can develope a proper user interface.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle 
                                services__modal-icon"></i>
                                <p className="services__modal-info">I can create ui element interactions.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle 
                                services__modal-icon"></i>
                                <p className="services__modal-info">I can position your company brand</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Services
