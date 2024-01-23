import {slide as Menu} from 'react-burger-menu';


function BurgerMenu(){

    return <div id="outer-container">
        <Menu className="burgerMenu" width={"30%"} right noOverlay> 

        <a href="/about">ABOUT</a>
        <div>|</div>
        <a href="/links">SOCIALS</a>
        <div>|</div>
        <a href="/merch">MERCH</a>
        <div>|</div>
        <a href="/contact">CONTACT</a>
        </Menu>
    </div>
}

export default BurgerMenu;