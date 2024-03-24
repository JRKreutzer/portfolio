import { socials } from '../../../constants'

const Social = ({className, footer}) => {
    return (
        <div className={`${className}__social`}>
            {
                socials.map((item, i) => (
                    <a key={i} href={item.path} className={`${className}__social-icon`} rel='noreferrer' target='_blank'>
                        <i className={footer ? item.classe[1] : item.classe[0] }></i>
                    </a>
                ))
            }            
        </div>
    )
}

export default Social