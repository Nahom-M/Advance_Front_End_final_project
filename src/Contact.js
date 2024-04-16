import React, { useState } from 'react';

const Contact = ({ children }) => { 
    //contact component acccepts children as a prop. Thus allows you to pass elements as children 
    //to the Contact component, which is then rendered inside the Contact component. 
    const [messageSent, setMessageSent] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setMessageSent(true);
    };

    return (
        //children prop is rendered inside div element, which means when elements are passed 
        //as children to contact component, it will be rendered at the location where {children} is
        <div>
            {messageSent && <p>Message sent successfully!</p>}
            <form onSubmit={handleSubmit}>
                {children}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Contact;