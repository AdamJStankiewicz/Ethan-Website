import Spotify from './Spotify';
import { Grid } from 'antd';

function Head(){
    const { useBreakpoint } = Grid;
    const breakpoints = useBreakpoint();
    const albumLinks = ["https://www.youtube.com/watch?v=MPF2N0betkM&ab_channel=Live2",
                        "https://www.youtube.com/watch?v=taoU08gSWS0",
                        "https://www.youtube.com/watch?v=I4MeLtiNY9s",
                        "https://www.youtube.com/watch?v=PAmKjpf9ULc&list=OLAK5uy_n1n0LyuZJDMLLJSM7prF0l_EHAVDKsmak"
                       ]

    if(breakpoints.xxl){
        return <div className="head">
            <div className="albums">
                <div>
                    <a href={albumLinks[0]} target="_blank">
                        <img src="/FrontSongs/Song1.jpg" width={400}></img>
                    </a>
                    <Spotify />
                    <a href={albumLinks[1]} target="_blank">
                        <img src="/FrontSongs/Song2.jpg" width={400}></img>
                    </a>
                </div>
                <div>
                    <a href={albumLinks[2]} target="_blank">
                        <img src="/FrontSongs/Song3.jpg" width={400}></img>
                    </a>
                    <a href={albumLinks[3]} target="_blank">
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
                    <a href={albumLinks[0]} target="_blank">
                        <img src="/FrontSongs/Song1.jpg" width={400}></img>
                    </a>
                    <a href={albumLinks[1]} target="_blank">
                        <img src="/FrontSongs/Song2.jpg" width={400}></img>
                    </a>
                </div>
                <Spotify />
                <div>
                    <a href={albumLinks[2]} target="_blank">
                        <img src="/FrontSongs/Song3.jpg" width={400}></img>
                    </a>
                    <a href={albumLinks[3]} target="_blank">
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
                    <a href={albumLinks[0]} target="_blank">
                        <img src="/FrontSongs/Song1.jpg" width={400}></img>
                    </a>
                   
                    <a href={albumLinks[1]} target="_blank">
                        <img src="/FrontSongs/Song2.jpg" width={400}></img>
                    </a>
                </div>
                <Spotify />
                <div>
                    <a href={albumLinks[2]} target="_blank">
                        <img src="/FrontSongs/Song3.jpg" width={400}></img>
                    </a>
                    <a href={albumLinks[3]} target="_blank">
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
                    <a href={albumLinks[0]} target="_blank">
                        <img src="/FrontSongs/Song1.jpg" width={300}></img>
                    </a>
                    <a href={albumLinks[1]} target="_blank">
                        <img src="/FrontSongs/Song2.jpg" width={300}></img>
                    </a>
                </div>
                <Spotify />
                <div>
                    <a href={albumLinks[2]} target="_blank">
                        <img src="/FrontSongs/Song3.jpg" width={300}></img>
                    </a>
                    <a href={albumLinks[3]} target="_blank">
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
                    <a href={albumLinks[0]} target="_blank">
                        <img src="/FrontSongs/Song1.jpg" width={250}></img>
                    </a>
                    <a href={albumLinks[1]} target="_blank">
                        <img src="/FrontSongs/Song2.jpg" width={250}></img>
                    </a>
                </div>
                <Spotify />
                <div>
                    <a href={albumLinks[2]} target="_blank">
                        <img src="/FrontSongs/Song3.jpg" width={250}></img>
                    </a>
                    <a href={albumLinks[3]} target="_blank">
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
                    <a href={albumLinks[0]} target="_blank">
                        <img src="/FrontSongs/Song1.jpg" width={150}></img>
                    </a>
                    <a href={albumLinks[1]} target="_blank">
                        <img src="/FrontSongs/Song2.jpg" width={150}></img>
                    </a>
                </div>
                <Spotify />
                <div>
                    <a href={albumLinks[2]} target="_blank">
                        <img src="/FrontSongs/Song3.jpg" width={150}></img>
                    </a>
                    <a href={albumLinks[3]} target="_blank">
                        <img src="/FrontSongs/Song4.jpg" width={150}></img>
                    </a>
                </div>
            </div>
        </div>;
    }

    
    return <div className="head">
            <div className="albums">
                <div>
                    <a href={albumLinks[0]} target="_blank">
                        <img src="/FrontSongs/Song1.jpg" width={400}></img>
                    </a>
                    <Spotify/>
                    <a href={albumLinks[1]} target="_blank">
                        <img src="/FrontSongs/Song2.jpg" width={400}></img>
                    </a>
                </div>
                <div>
                    <a href={albumLinks[2]} target="_blank">
                        <img src="/FrontSongs/Song3.jpg" width={400}></img>
                    </a>
                    <a href={albumLinks[3]} target="_blank">
                        <img src="/FrontSongs/Song4.jpg" width={400}></img>
                    </a>
                </div>
            </div>
        </div>;
}

export default Head;