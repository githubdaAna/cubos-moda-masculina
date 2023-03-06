import './style.css'
import Logo from '../../assets/logo.svg'

const Header = () => {
    return (
        <header>
            <div>
                <h1>MODA MASCULINA</h1>
                <h2>SAPATOS SOCIAIS - CASUAIS - ESPORTE FINO</h2>
            </div>
            <img className='logo' src={Logo} alt='logo' />
        </header>
    )
}

export default Header