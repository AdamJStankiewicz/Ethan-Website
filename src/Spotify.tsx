import { Grid } from 'antd';

function Spotify(){
    const { useBreakpoint } = Grid;
    const breakpoints = useBreakpoint();

    if(breakpoints.lg) return <iframe className="spot" src="https://open.spotify.com/embed/artist/6lRAIvgICW7hhoZHsm49hT" width={700} height={400} allowTransparency={true} title="Top Tracks"></iframe>;
    if(breakpoints.sm) return <iframe className="spot" src="https://open.spotify.com/embed/artist/6lRAIvgICW7hhoZHsm49hT" width={500} height={400} allowTransparency={true} title="Top Tracks"></iframe>;
    if(breakpoints.xs) return <iframe className="spot" src="https://open.spotify.com/embed/artist/6lRAIvgICW7hhoZHsm49hT" width={300} height={400} allowTransparency={true} title="Top Tracks"></iframe>;
}

export default Spotify;