import React, {useState} from 'react';

// contact form 
function ContactForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Need to add code here to submit contact form data.
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                First Name:
                <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />
            </label>
            <label>
                Last Name:
                <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} />
            </label>
            <label>
                Email:
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
            </label>
            <label>
                Message:
                <textarea value={message} onChange={e => setMessage(e.target.value)} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
}

export default ContactForm;
