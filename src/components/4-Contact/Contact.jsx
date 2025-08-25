import React from 'react';
import Lottie from "lottie-react";
import doneAnimation from "../../../public/animation/done.json";
import contactAnimation from "../../../public/animation/contact-us.json";
import { useForm, ValidationError } from '@formspree/react';
import './contact.css'

const Contact = () => {
    const [state, handleSubmit] = useForm("xnnbapor");
    return(
        <div className='contact row'>
                <div className='head mb-5'>
                    <h1><span className='icon-envelope'/> Contact Us</h1>
                    <p>Contact Us For More Information And Get Notified When I Publish Something New</p>
                </div>
            <div className='col-md-7'>
                <div className='form'>
                    <form onSubmit={handleSubmit}>
                        <div>
                        <label htmlFor='email'>Email Address:</label>
                        <input required autoComplete='off' type='email' id='email' name='email' placeholder='Type Your Email'/>
                        <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                        />
                        </div>
                        <div>
                        <label htmlFor='text'>Your Message:</label>
                        <textarea required id='text' name='message' placeholder='Type Your Message...'/>
                        <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                        />
                        </div>
                        <button type="submit" disabled={state.submitting} className='submit'>
                            {state.submitting ? "Submitting ..." : "Submit" }
                        </button>
                        {state.succeeded && (<p className='message d-flex align-items-center'>
                            <Lottie style={{height: "66px"}} loop={false} animationData={doneAnimation} />
                            Message Has Been Sent Successfully</p>)}
                    </form>
                </div>
            </div>
            <div className='animtion col-md-5'>
                <Lottie style={{height: "400px"}} animationData={contactAnimation} />
            </div>
        </div>
    )
}
export default Contact;