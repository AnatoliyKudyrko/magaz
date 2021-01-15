import React, {Component} from 'react';
import {Menu} from "./menu/menu";
import './header.css';
import Title from "./titleContainer/title";
import Main from "./main/main";

class Header extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <Menu />
                <Title />
                 <Main />
            </div>
        );
    }
}

export default Header;