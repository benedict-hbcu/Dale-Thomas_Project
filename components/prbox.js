import React, { useState } from "react";
import { useRouter } from "next/router";
 
const ContactPage = () => {
    const [submitterPrayer, setSubmitterPrayer] = useState("");
    const router = useRouter();
    const confirmationScreenVisible =
    router.query?.success && router.query.success === "true";
    const formVisible = !confirmationScreenVisible;
 
    const ConfirmationMessage = (
        <React.Fragment>
            <p>
                You're covered. 🙏 🩸
            </p>
 
            <button onClick={() => router.replace("/contact", undefined, { shallow: true })}> Submit Another Prayer </button>
        </React.Fragment>
    );
 
    const ContactForm = (
        <form
            className="container1"
            method="POST"
            name="contact-form"
            action="contact/?success=true"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
        >
    
            <label htmlFor="message">Prayer Request Bin *</label>
            <p> </p>
            <textarea id="message" name="message" required onChange={(e)=> setSubmitterPrayer(e.target.value)}/>
            <p> </p>
            <button type="submit" className="button" onClick={() => router.push('/prayerwall')}>Submit</button>
        </form>
    );
 
    return (
        <div className="container1">

      <div>{formVisible ? ContactForm : ConfirmationMessage}</div>
      <footer></footer>
      <style jsx global>
        {`
          html,
         *{
            box-sizing: border-box;
         }
          .container1 {
            flex-direction: column;
            width: 100%;
        
          }
          @media (max-width: 769px max) {
            .container1 {
                width: 100%;
            }
          }
          
          input[type="text"],
          input[type="message"],
          textarea {
            font-size: 12px;
            width: 50%;
            height: 150px;
            padding: 12px 20px;
            box-sizing: border-box;
            border: 2px solid #ccc;
            border-radius: 4px;
            background-color: #f8f8f8;
            font-size: 16px;
            resize: none;
          }
          .button {
            max-width: 400px;
            margin: 0 auto;
            color: #f3f0ee;
            background-color: #ffc107;
            border: none;
            padding: 15px 32px;
            text-align: left;
            text-decoration: none;
            display: inline-block;
            font-size: 10px;
            text-transform: uppercase;
            border-radius: 10px;
          }
          [type="button"].button:hover {
            background-color: #fd7e14;
          }
        `}
      </style>
    </div>
  );
};
 
export default ContactPage;