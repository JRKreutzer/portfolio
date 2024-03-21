import { socials } from '../../../constants'

const Social = () => {
    return (
        <div className='home__social'>
            {
                socials.map((item, i) => (
                    <a key={i} href={item.path} className='home__social-icon' rel='noreferrer' target='_blank'>
                        <i className={item.classe}></i>
                    </a>
                ))
            }            
        </div>
    )
}

export default Social