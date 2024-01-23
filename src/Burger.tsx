import Options from "./Options";
import BurgerMenu from "./BurgerMenu";

function menu(){
    console.log("Burger time");
}

function Burger(){
    return <div>
        <button className="burger" style={{position: "relative", top:"-0.2rem"}} onClick={menu}>
            <img className="navImg" src="/icons/burger.svg" width={30} ></img>
            <BurgerMenu />
        </button>
        
    </div>
}

export default Burger;