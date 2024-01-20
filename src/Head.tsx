import Spotify from './Spotify';
import { Grid } from 'antd';

function Head(){
    const { useBreakpoint } = Grid;
    const breakpoints = useBreakpoint();
    
    if(breakpoints.xl){
        return <div className="head" style={{top: "-3rem"}}>
            <div className="albums">
                <div>
                    <a href="https://www.youtube.com/watch?v=MPF2N0betkM&ab_channel=Live2" target="_blank">
                        <img src="/testimages/dreamtn.jpg" width={400}></img>
                    </a>
                    <Spotify />
                    <a href="https://www.youtube.com/watch?v=I4MeLtiNY9s&ab_channel=EthanGander-Topic" target="_blank">
                        <img src="/testimages/playthistn.jpg" width={400}></img>
                    </a>
                </div>
                <div>
                    <a href="https://www.youtube.com/watch?v=EkoVfvJR520&ab_channel=EthanGander-Topic" target="_blank">
                        <img src="/testimages/getawaytn.jpg" width={400}></img>
                    </a>
                    <a href="https://www.youtube.com/watch?v=9M1VeAWoDJM&ab_channel=EthanGander-Topic" target="_blank">
                        <img src="/testimages/powertn.jpg" width={400}></img>
                    </a>
                </div>
            </div>
        </div>;
    }
    if(breakpoints.lg){
        return <div className="head">
            <div className="albums">
                <div>
                    <a href="https://www.youtube.com/watch?v=MPF2N0betkM&ab_channel=Live2" target="_blank">
                        <img src="/testimages/dreamtn.jpg" width={300}></img>
                    </a>
                    
                    <a href="https://www.youtube.com/watch?v=I4MeLtiNY9s&ab_channel=EthanGander-Topic" target="_blank">
                        <img src="/testimages/playthistn.jpg" width={300}></img>
                    </a>
                </div>
                <Spotify />
                <div>
                    <a href="https://www.youtube.com/watch?v=EkoVfvJR520&ab_channel=EthanGander-Topic" target="_blank">
                        <img src="/testimages/getawaytn.jpg" width={300}></img>
                    </a>
                    <a href="https://www.youtube.com/watch?v=9M1VeAWoDJM&ab_channel=EthanGander-Topic" target="_blank">
                        <img src="/testimages/powertn.jpg" width={300}></img>
                    </a>
                </div>
            </div>
        </div>;
    }
    if(breakpoints.md){
        return <div className="head">
            <div className="albums">
                <div>
                    <a href="https://www.youtube.com/watch?v=MPF2N0betkM&ab_channel=Live2" target="_blank">
                        <img src="/testimages/dreamtn.jpg" width={300}></img>
                    </a>
                    <Spotify />
                    <a href="https://www.youtube.com/watch?v=I4MeLtiNY9s&ab_channel=EthanGander-Topic" target="_blank">
                        <img src="/testimages/playthistn.jpg" width={300}></img>
                    </a>
                </div>
                <div>
                    <a href="https://www.youtube.com/watch?v=EkoVfvJR520&ab_channel=EthanGander-Topic" target="_blank">
                        <img src="/testimages/getawaytn.jpg" width={300}></img>
                    </a>
                    <a href="https://www.youtube.com/watch?v=9M1VeAWoDJM&ab_channel=EthanGander-Topic" target="_blank">
                        <img src="/testimages/powertn.jpg" width={300}></img>
                    </a>
                </div>
            </div>
        </div>;
    }
    if(breakpoints.sm){
        return <div className="head">
            <div className="albums">
                <div>
                    <a href="https://www.youtube.com/watch?v=MPF2N0betkM&ab_channel=Live2" target="_blank">
                        <img src="/testimages/dreamtn.jpg" width={250}></img>
                    </a>
                    <a href="https://www.youtube.com/watch?v=I4MeLtiNY9s&ab_channel=EthanGander-Topic" target="_blank">
                        <img src="/testimages/playthistn.jpg" width={250}></img>
                    </a>
                </div>
                <Spotify />
                <div>
                    <a href="https://www.youtube.com/watch?v=EkoVfvJR520&ab_channel=EthanGander-Topic" target="_blank">
                        <img src="/testimages/getawaytn.jpg" width={250}></img>
                    </a>
                    <a href="https://www.youtube.com/watch?v=9M1VeAWoDJM&ab_channel=EthanGander-Topic" target="_blank">
                        <img src="/testimages/powertn.jpg" width={250}></img>
                    </a>
                </div>
            </div>
        </div>;
    }
    if(breakpoints.xs){
        return <div className="head" style={{top: "1rem"}}>
            <div className="albums">
                <div>
                    <a href="https://www.youtube.com/watch?v=MPF2N0betkM&ab_channel=Live2" target="_blank">
                        <img src="/testimages/dreamtn.jpg" width={150}></img>
                    </a>
                    <a href="https://www.youtube.com/watch?v=I4MeLtiNY9s&ab_channel=EthanGander-Topic" target="_blank">
                        <img src="/testimages/playthistn.jpg" width={150}></img>
                    </a>
                </div>
                <Spotify />
                <div>
                    <a href="https://www.youtube.com/watch?v=EkoVfvJR520&ab_channel=EthanGander-Topic" target="_blank">
                        <img src="/testimages/getawaytn.jpg" width={150}></img>
                    </a>
                    <a href="https://www.youtube.com/watch?v=9M1VeAWoDJM&ab_channel=EthanGander-Topic" target="_blank">
                        <img src="/testimages/powertn.jpg" width={150}></img>
                    </a>
                </div>
            </div>
        </div>;
    }
    return <div className="head">
            <div className="albums">
                <div>
                    <a href="https://www.youtube.com/watch?v=MPF2N0betkM&ab_channel=Live2" target="_blank">
                        <img src="/testimages/dreamtn.jpg" width={400}></img>
                    </a>
                    <Spotify />
                    <a href="https://www.youtube.com/watch?v=I4MeLtiNY9s&ab_channel=EthanGander-Topic" target="_blank">
                        <img src="/testimages/playthistn.jpg" width={400}></img>
                    </a>
                </div>
                <div>
                    <a href="https://www.youtube.com/watch?v=EkoVfvJR520&ab_channel=EthanGander-Topic" target="_blank">
                        <img src="/testimages/getawaytn.jpg" width={400}></img>
                    </a>
                    <a href="https://www.youtube.com/watch?v=9M1VeAWoDJM&ab_channel=EthanGander-Topic" target="_blank">
                        <img src="/testimages/powertn.jpg" width={400}></img>
                    </a>
                </div>
            </div>
        </div>;
}

export default Head;