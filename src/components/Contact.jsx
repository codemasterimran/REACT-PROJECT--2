import React from 'react'

export const Contact = () => {
  return (
    <div className="contact">
        <main>
         <h1>Contact Us</h1>

         <form >
            <div>
                <label>Name</label>
                <input type="text" required placeholder="Abc"/>
            </div>

            <div>
                <label>Email</label>
                <input type="email" required placeholder="Abc@xyz.com"/>
            </div>

            <div>
                <label>Messages</label>
                <input type="text" required placeholder="Tell us about your query"/>
            </div>
            <button type="Submit">SEND</button>
         </form>
        </main>
    </div>
  )
}
export default Contact;