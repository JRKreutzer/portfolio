import { links } from '../../constants'
import Social from '../Home/Social'
import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Kreutzer</h1>
                <ul className='footer__list'>

                    {
                        links.map((link, i) => (
                            <li key={i}>
                                <a href={link.path} className='footer__link'>{link.name}</a>
                            </li>
                        ))
                    }
                    
                </ul>

                <Social className="footer" footer/>
                
                <span className='footer__copy'>
                    &#169; Kreutzer. Todos os direitos reservados.<br/>Este site é uma criação de Kreutzer, com base na inspiração e contribuições do talentoso Crypticalcoder.
                </span>
            </div>
        </footer>
    )
}

export default Footer