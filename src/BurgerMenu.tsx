import {slide as Menu} from 'react-burger-menu';
import BurgerSocials from './BurgerSocials';

function BurgerMenu(){

    return <div id="outer-container">
        <Menu className="burgerMenu" width={"30%"} right noOverlay> 

        <a href="/about">ABOUT</a>
        <div>|</div>
        <a href="/merch">MERCH</a>
        <div>|</div>
        <a href="/contact">CONTACT</a>
        <div>|</div>
        <BurgerSocials/>
        </Menu>
    </div>
}

export default BurgerMenu;