import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png'
import './Menu.css'
//import ButtonLink from './components/ButtonLink';
import Button from '../Button'
function Menu () {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="Clafix Logo"/>
            </Link>

            <Button as={Link} to="/cadastro/video">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;