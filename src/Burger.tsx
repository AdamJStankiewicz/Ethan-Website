import Options from "./Options";
let titlePos = 0;

function Burger(){
    return <div>
        <a href="/" className="site-title" style={{position: "relative",top:titlePos}}>ETHAN GANDER</a>
        <button className="burger" style={{position: "relative", top:"-0.3rem",right:"-4.5rem"}} onClick={menu}>
            <img className="navImg" src="/icons/burger.svg" width={25} ></img>
        </button>
    </div>
}

function menu(){
    titlePos = 1000;
}

export default Burger;