import { Grid } from 'antd';

function About(){
    const { useBreakpoint } = Grid;
    const breakpoints = useBreakpoint();
    let imgSize = 300;
    let imgPos = "0rem";
    let fntSize = "1.75rem";

    if(breakpoints.xxl) {imgSize = 300; imgPos = "1rem"}
    else if(breakpoints.xl) {imgSize = 300; imgPos = "1rem"}
    else if(breakpoints.md) {imgSize = 200; imgPos = "-5rem"}
    else if(breakpoints.sm) {imgSize = 200; imgPos = "-5rem"}
    else if(breakpoints.xs) {imgSize = 200; imgPos = "2rem"}
    return <div className="about" style={{top : imgPos}}>
        <img className="aboutImg" src="/testimages/graffiti.jpg" width={imgSize}></img>

        <div style={{fontSize: fntSize}}>
        <p>Ethan Gander is a 25-year-old multi-instrumentalist, composer, and producer from Northern California.</p>
        <p>Navigating with ease between genres and instruments (vocals, piano, guitar, bass and drums to name a few), his goal is to create music that resonates with his listeners. His signature sound wraps seemingly disparate ideas – the energy of the dance floor, 50s crooner vibes, post-breakup melancholy, and a sax solo – into coherent tracks that make listeners laugh, cry and move.</p>
        <p>As an instructor at Canova Records and the Ukiah School of Music since 2015, Ethan has helped countless youth and adults develop their own musical passions.</p>
        <p>No matter his role – solo artist, band leader and member, educator, composer or producer – Ethan is focused on using his vast skillset to make music come alive for others.</p>
        </div>
    </div> ;
}

export default About;