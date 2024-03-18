function Email(){
    return <div>
        <form action="mailto:adam.james.stankiewicz@gmail.com">
            <input className="emailBox" type="text" ></input>
            <input type="submit" value="Send"></input>
        </form>
    </div>
}

export default Email;