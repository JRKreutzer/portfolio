import { useState } from 'react'
import { useLinkContext } from '../../context/LinkContext';
import './header.css'
import ScrollUp from '../ScrollUp'

const Header = () => {

    /*============================== Toggle Menu ==============================*/
    const [toggle, setToggle] = useState(false)
    const { linksState, setLinksState } = useLinkContext();

    const handleClick = (clickedLink) => {
        const updatedLinks = linksState.map(link => {
            if (link.name === clickedLink.name) {
                return { ...link, active: true };
            } else {
                return { ...link, active: false };
            }
        });
        setLinksState(updatedLinks);
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
                            linksState.map((link, i) => (
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
            <div onClick={() => handleClick(linksState[0])}>
                <ScrollUp />
            </div>
        </header>
    )
}

export default Header