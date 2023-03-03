import React, { useState } from "react";
import { useRouter } from "next/router";
 
export default function ContactPage(){
    const [prayerText, setPrayerText] = React.useState("");
    const handlePrayerTextChange = (event) => setPrayerText(event.target.value);
    const handleSubmit = () => {
        const prayer = {
            PrayerRequest: prayerText
        };
        fetch('/api/save-prayer', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: prayer,
        })

        console.log("prayer", prayer);
 
    };
 
    return (
        <div className="container1">
            <div>
                <textarea
                    value={prayerText}
                    onChange={handlePrayerTextChange}
                    placeholder="Enter your prayer request here"
                />
                <p> </p>
                    <button type="submit" className="button" onClick={handleSubmit}>Submit</button>
                    <p> </p>
                    <p> </p>
        </div>
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
 