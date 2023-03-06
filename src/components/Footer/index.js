import './style.css'
import Logo from '../../assets/logo.svg'
import LogoFacebook from '../../assets/facebook.svg'
import LogoInstagram from '../../assets/instagram.svg'

const Footer = () => {
    return (
        <footer>
            <div className='left'>
                <div className='container-address'>
                    <strong>Endereço:</strong>
                    <span>Rua Cubos, 10</span>
                    <span>Jardim Academy</span>
                    <span>Salvador - Bahia - CEP 41820-021</span>
                </div>
                <div className='container-social'>
                    <img src={LogoFacebook} alt='logo facebook' />
                    <img src={LogoInstagram} alt='logo instagram' />
                </div>
            </div>
            <div className='vertical-line'>

            </div>
            <div className='right'>
                <img src={Logo} alt='logo' />
            </div>
        </footer>
    )
}

export default Footer