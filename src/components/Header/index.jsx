import { useState } from 'react'
import { links } from '../../constants'
import './header.css'

const Header = () => {

    /*============================== Change Background Header ==============================*/
    window.addEventListener("scroll", function() {
      const header = document.querySelector(".header")
      if (this.scrollY >=80) {
        header.classList.add("scroll-header")
      } else {
        header.classList.remove("scroll-header")
      }
    })

    /*============================== Toggle Menu ==============================*/
    const [toggle, setToggle] = useState(false)
    const [navLinks, setNavLinks] = useState(links);

    const handleClick = (clickedLink) => {
        const updatedLinks = navLinks.map(link => {
            if (link.name === clickedLink.name) {
                return { ...link, active: true };
            } else {
                return { ...link, active: false };
            }
        });
        setNavLinks(updatedLinks);
    };

    return (
        <header className="header">
            <nav className="nav container">
                <a href="/" className="nav__logo">
                    Kreutzer
                </a>
                <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        {
                            navLinks.map((link, i) => (
                                <li key={i} className='nav__item' onClick={() => handleClick(link)}>
                                    <a href={link.path} className={`${link.active && 'active-link'} nav__link`}>
                                        <i className={`${link.classe} nav__icon`}></i>
                                        {link.name}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                    <i className="uil uil-times nav__close" onClick={() => setToggle(!toggle)}></i>
                </div>
                <div className="nav__toggle" onClick={() => setToggle(!toggle)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header