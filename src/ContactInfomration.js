const ContactInformation = () =>{
    return(
        <div>
            <h2>Contact Us</h2>
            <form>
                <label>Name:</label>
                <input type="text" name="name" placeholder='Name'/>
                <br></br><br></br>
                <label>Email:</label>
                <input type="email" name="email" placeholder='Email'/>  
                <br></br><br></br>
                <label>Message:</label>
                <textarea name="message" placeholder='Enter your message'></textarea>
                <br></br><br></br>
            </form>
        </div>
    );
}

export default ContactInformation;