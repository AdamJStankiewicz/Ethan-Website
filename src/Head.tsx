import Spotify from './Spotify';
import { Grid } from 'antd';

function Head(){
    const { useBreakpoint } = Grid;
    const breakpoints = useBreakpoint();
    let orient = 0;

    if(breakpoints.xxl){
        return <div className="head">
            <div className="albums">
                <div>
                    <a href="https://www.youtube.com/watch?v=MPF2N0betkM&ab_channel=Live2" target="_blank">
                        <img src="/FrontSongs/Song1.jpg" width={400}></img>
                    </a>
                    <Spotify />
                    <a href="https://www.youtube.com/watch?v=I4MeLtiNY9s&ab_channel=EthanGander-Topic" target="_blank">
                        <img src="/FrontSongs/Song2.jpg" width={400}></img>
                    </a>
                </div>
                <div>
                    <a href="https://www.youtube.com/watch?v=EkoVfvJR520&ab_channel=EthanGander-Topic" target="_blank">
                        <img src="/FrontSongs/Song3.jpg" width={400}></img>
                    </a>
                    <a href="https://www.youtube.com/watch?v=9M1VeAWoDJM&ab_channel=EthanGander-Topic" target="_blank">
                        <img src="/FrontSongs/Song4.jpg" width={400}></img>
                    </a>
                </div>
            </div>
        </div>;
    }
    if(breakpoints.xl){
        return <div className="head">
            <div className="albums">
                <div>
                    <a href="https://www.youtube.com/watch?v=MPF2N0betkM&ab_channel=Live2" target="_blank">
                        <img src="/FrontSongs/Song1.jpg" width={400}></img>
                    </a>
                    <a href="https://www.youtube.com/watch?v=I4MeLtiNY9s&ab_channel=EthanGander-Topic" target="_blank">
                        <img src="/FrontSongs/Song2.jpg" width={400}></img>
                    </a>
                </div>
                <Spotify />
                <div>
                    <a href="https://www.youtube.com/watch?v=EkoVfvJR520&ab_channel=EthanGander-Topic" target="_blank">
                        <img src="/FrontSongs/Song3.jpg" width={400}></img>
                    </a>
                    <a href="https://www.youtube.com/watch?v=9M1VeAWoDJM&ab_channel=EthanGander-Topic" target="_blank">
                        <img src="/FrontSongs/Song4.jpg" width={400}></img>
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
                        <img src="/FrontSongs/Song1.jpg" width={400}></img>
                    </a>
                   
                    <a href="https://www.youtube.com/watch?v=I4MeLtiNY9s&ab_channel=EthanGander-Topic" target="_blank">
                        <img src="/FrontSongs/Song2.jpg" width={400}></img>
                    </a>
                </div>
                <Spotify />
                <div>
                    <a href="https://www.youtube.com/watch?v=EkoVfvJR520&ab_channel=EthanGander-Topic" target="_blank">
                        <img src="/FrontSongs/Song3.jpg" width={400}></img>
                    </a>
                    <a href="https://www.youtube.com/watch?v=9M1VeAWoDJM&ab_channel=EthanGander-Topic" target="_blank">
                        <img src="/FrontSongs/Song4.jpg" width={400}></img>
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
                        <img src="/FrontSongs/Song1.jpg" width={300}></img>
                    </a>
                    <a href="https://www.youtube.com/watch?v=I4MeLtiNY9s&ab_channel=EthanGander-Topic" target="_blank">
                        <img src="/FrontSongs/Song2.jpg" width={300}></img>
                    </a>
                </div>
                <Spotify />
                <div>
                    <a href="https://www.youtube.com/watch?v=EkoVfvJR520&ab_channel=EthanGander-Topic" target="_blank">
                        <img src="/FrontSongs/Song3.jpg" width={300}></img>
                    </a>
                    <a href="https://www.youtube.com/watch?v=9M1VeAWoDJM&ab_channel=EthanGander-Topic" target="_blank">
                        <img src="/FrontSongs/Song4.jpg" width={300}></img>
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
                        <img src="/FrontSongs/Song1.jpg" width={250}></img>
                    </a>
                    <a href="https://www.youtube.com/watch?v=I4MeLtiNY9s&ab_channel=EthanGander-Topic" target="_blank">
                        <img src="/FrontSongs/Song2.jpg" width={250}></img>
                    </a>
                </div>
                <Spotify />
                <div>
                    <a href="https://www.youtube.com/watch?v=EkoVfvJR520&ab_channel=EthanGander-Topic" target="_blank">
                        <img src="/FrontSongs/Song3.jpg" width={250}></img>
                    </a>
                    <a href="https://www.youtube.com/watch?v=9M1VeAWoDJM&ab_channel=EthanGander-Topic" target="_blank">
                        <img src="/FrontSongs/Song4.jpg" width={250}></img>
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
                        <img src="/FrontSongs/Song1.jpg" width={150}></img>
                    </a>
                    <a href="https://www.youtube.com/watch?v=I4MeLtiNY9s&ab_channel=EthanGander-Topic" target="_blank">
                        <img src="/FrontSongs/Song2.jpg" width={150}></img>
                    </a>
                </div>
                <Spotify />
                <div>
                    <a href="https://www.youtube.com/watch?v=EkoVfvJR520&ab_channel=EthanGander-Topic" target="_blank">
                        <img src="/FrontSongs/Song3.jpg" width={150}></img>
                    </a>
                    <a href="https://www.youtube.com/watch?v=9M1VeAWoDJM&ab_channel=EthanGander-Topic" target="_blank">
                        <img src="/FrontSongs/Song4.jpg" width={150}></img>
                    </a>
                </div>
            </div>
        </div>;
    }

    
    return <div className="head">
            <div className="albums">
                <div>
                    <a href="https://www.youtube.com/watch?v=MPF2N0betkM&ab_channel=Live2" target="_blank">
                        <img src="/FrontSongs/Song1.jpg" width={400}></img>
                    </a>
                    <Spotify/>
                    <a href="https://www.youtube.com/watch?v=I4MeLtiNY9s&ab_channel=EthanGander-Topic" target="_blank">
                        <img src="/FrontSongs/Song2.jpg" width={400}></img>
                    </a>
                </div>
                <div>
                    <a href="https://www.youtube.com/watch?v=EkoVfvJR520&ab_channel=EthanGander-Topic" target="_blank">
                        <img src="/FrontSongs/Song3.jpg" width={400}></img>
                    </a>
                    <a href="https://www.youtube.com/watch?v=9M1VeAWoDJM&ab_channel=EthanGander-Topic" target="_blank">
                        <img src="/FrontSongs/Song4.jpg" width={400}></img>
                    </a>
                </div>
            </div>
        </div>;
}

export default Head;