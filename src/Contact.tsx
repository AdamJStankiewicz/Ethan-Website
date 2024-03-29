import Email from "./Email";

function Contact(){
    return <div style={{color:"white"}}>
        <h1 className="contactTitle">CONTACT</h1>
        <p>For booking and general inquiries, contact Ethan at:</p>
        <Email/>
    </div>
}

export default Contact;