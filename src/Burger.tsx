import Options from "./Options";
import BurgerMenu from "./BurgerMenu";


function Burger(){
    return <div>
        <button className="burger" style={{position: "relative", top:"-0.2rem"}}>
            <img className="navImg" src="/icons/burger.svg" width={30} ></img>
            <BurgerMenu />
        </button>
        
    </div>
}

export default Burger;