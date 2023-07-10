import React from 'react';
import Nav from './Nav';

const styles = {
    color: 'blue',
}

const Header = () => {
    return (
        <header className="container" style={styles}>
            <img src="#" alt="Logo"/>
            <Nav/>
        </header>
    )

}

export default Header;
