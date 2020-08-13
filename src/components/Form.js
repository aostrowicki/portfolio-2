import React from 'react'

export default function Form() {
    return (
        <form method="POST" data-netlify="true" name="contact">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" id="email" />
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" cols="30" rows="7"></textarea>
            <input type="submit" value="Send" className="btn" />
        </form>
    )
}
