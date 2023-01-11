import React from 'react'
import './footer.css';
const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Lokesh</h1>
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#skills" className="footer__link"> Skills</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Portfolio</a>
                </li>
            </ul>

            <div className="footer__social">
            <a href="https://www.instagram.com/dark_eights/?hl=en" className="footer__social-link" target="_blank"><i class="uil uil-instagram"></i></a>
            <a href="https://github.com/Lokesh-malviya" className="footer__social-link" target="_blank"><i class="uil uil-github"></i></a>
            <a href="https://www.linkedin.com/in/lokesh-malviya-42139a215/" className="footer__social-link" target="_blank"><i class="uil uil-linkedin"></i></a>
            </div>
            <span className="footer__copy">Crypticalcoder. All right reserved</span>
        </div>
    </footer>
  )
}

export default Footer
