import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPages } from '../../redux/reducers/PagesReducers';
import { useEffect, useState } from 'react';
import logo from '/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPages());
    }, [dispatch]);

    const pages = useSelector(state => state.pages.pages);

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <div className="navbar">
                <div className='top'>
                    <Link to={'/'}>
                        <img src={logo} className='logo' alt="logo" />
                    </Link>
                </div>

                <ul className='links'>
                    {pages &&
                        pages.map(link=>{
                            return(
                                <li key={link.id}>
                                    <Link  to={`/${link.name}`}>
                                        {link.name}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="navButtons">
                </div>
                <div className="burgeurMenuButton" onClick={handleToggleMenu}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </div>
            <div className={`burgerMenu ${isMenuOpen ? 'open' : ''}`}>
                <ul className='links'>
                    {pages &&
                        pages.map(link => (
                            <li key={link.id}>
                                <Link to={`/${link.name}`} onClick={handleToggleMenu}>
                                    {link.name}
                                </Link>
                            </li>
                        ))
                    }
                    <div className="divider"></div>
                    <div className="buttonsBurgerMenu">
                        {/* Ajoutez vos boutons de menu hamburger ici si nécessaire */}
                    </div>
                </ul>
            </div>
        </header>
    );
};

export default Navigation;