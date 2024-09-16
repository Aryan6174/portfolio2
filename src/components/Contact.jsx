import React from 'react'
import "./Contact.css"
const Contact = () => {
  return (
    <div>
        <div className="top"></div>
        <center><div class="cont"><span>Contact Me</span></div></center>
        <form action="" method="" class="form">
        <div class="input-group">
                    <input type="text" name="first_name" id="first-name" placeholder="First name"></input>
                    <label for="first-name">First name</label>
                </div>
                
                <div class="input-group">
                    <input type="text" name="last_name" id="last-name" placeholder="Last Name"></input>
                    <label for="last-name">Last name</label>
                </div>

                <div class="input-group">
                    <input type="email" name="e-mail" id="e-mail" placeholder="E-mail"></input>
                    <label for="e-mail">E-mail</label>
                </div>

                <div class="textarea-group">
                    <textarea name="message" id="message" rows="5" placeholder="Message"></textarea>
                    <label for="message">Message</label>
                </div>

                <div class="button-div">
                    <button type="submit">Send</button>
                </div>
        </form>
        
    
    </div>
  )
}

export default Contact