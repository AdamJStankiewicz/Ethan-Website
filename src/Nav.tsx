import { Grid } from 'antd';
import Burger from './Burger';
import Options from './Options';

function Nav(){
    const { useBreakpoint } = Grid;
    const breakpoints = useBreakpoint();

    if(breakpoints.xl){
        return <div className="navCont">

            <nav className="nav">
                <a href="/" className="site-title">ETHAN GANDER</a>
                <img className="navImg" src="/vintage1utlrawide.png" width={1000}></img>
                <Options />
            </nav>
            <h1 className="headTitle">musician | composer | producer</h1>
        </div>
    }
    if(breakpoints.lg){
        return <div className="navCont">

            <nav className="nav">
                <a href="/" className="site-title">ETHAN GANDER</a>
                <img className="navImg" src="/vintage1utlrawide.png" width={500}></img>
                <Options />
            </nav>
            <h1 className="headTitle">musician | composer | producer</h1>
        </div>
    }
    if(breakpoints.sm){
        return <div className="navCont">

            <nav className="nav">
            <a href="/" className="site-title">ETHAN GANDER</a>
            <img className="navImg" src="/icons/burger.svg" width={25} ></img>
            </nav>
        </div>
    }
    if(breakpoints.xs){
        return <div className="navCont">

            <nav className="nav">
            <a href="/" className="site-title">ETHAN GANDER</a>
            <img className="navImg" src="/icons/burger.svg" width={25} ></img>
            </nav>
        </div>
    }
    return <div className="navCont">

            <nav className="nav">
                <a href="/" className="site-title">ETHAN GANDER</a>
                <Options />
            </nav>
        </div>
}

export default Nav;