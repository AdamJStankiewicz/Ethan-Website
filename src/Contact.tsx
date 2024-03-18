import Email from "./Email";

function Contact(){
    return <div style={{color:"white"}}>
        <h1 className="contactTitle">CONTACT</h1>
        <Email/>
        <p>For booking and general inquiries, contact Ethan at:</p>
        <a href="mailto:ethangandermusic@gmail.com" target="_blank">
            ethangandermusic@gmail.com
        </a>
    </div>
}

export default Contact;