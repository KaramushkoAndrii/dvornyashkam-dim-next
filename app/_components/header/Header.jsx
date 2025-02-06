


import { Link } from 'react-router-dom';
import Navigation from '../navigation/Navigation';
import { navigationList } from '../../data/navigationList';
import ChangeLng from '../changeLng/ChangeLng';

import './header.scss';


const Header = () => {

    return (
        <header className='header'>

            <Navigation list={navigationList} />

            <Link to={'/'} className='logo__wrapper'>
                <img className='logo' src="/logo.png" alt="logo"/>
            </Link>
            
            <ChangeLng />
        </header>
    )
}

export default Header;