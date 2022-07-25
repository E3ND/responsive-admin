import './Navbar.css'
import Avatar from '../../assets/user-icon.png';

const Navbar = ({ sidebarOpen, openSidebar }) => {
    return(
        <nav className='navbar'>
            <div className='nav_icon' onClick={() => openSidebar()}>
                <i className='fa fa-bars' aria-hidden='true'></i>
            </div>

            <div className='navbar__left'>
                <a href='#'>Produtos</a>
                <a href='#'>usuários</a>
                <a href='#' className='active__link'>Admin</a>
            </div>

            <div className='navbar__right'>
                <a href='#'>
                    <i className='fa fa-search'></i>
                </a>

                <a href='#'>
                    <i className='fa fa-clock-o'></i>
                </a>

                <a href='#'>
                    <img width='45' src={Avatar} alt='Avatar' />
                </a>
            </div>
        </nav>
    );
}

export default Navbar