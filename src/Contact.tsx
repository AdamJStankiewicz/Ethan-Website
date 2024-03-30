import Email from "./Email";

function Contact(){
    return <div style={{color:"white"}}>
        <h1 className="contactTitle">CONTACT</h1>
        <p className="contactParagraph">
            <strong>For booking and general inquiries, contact Ethan at</strong><br/>
            <a href="mailto:%65%74%68%61%6e%67%61%6e%64%65%72%6d%75%73%69%63%40%67%6d%61%69%6c%2e%63%6f%6d" target="_blank">
                ethangandermusic@gmail.com
            </a>
            <br/>
            <br/>
            <span>latest updates on <a href="https://www.instagram.com/ethangandermusic/?hl=en" target="_blank"> Instagram </a> and <a href="https://www.facebook.com/ethangandermusic/" target="_blank"> Facebook </a></span>
            <br/>
            <span>@ethangandermusic</span>
        </p>
        
    </div>
}

export default Contact;