import React, { useEffect } from "react";

function Contact() {

  useEffect(() => {
    window.location.href = "https://www.instagram.com/accounts/login/";
  }, []);

  return (
    <div>
      <h2> 
         Contact
          </h2>
    </div>
  );
}

export default Contact;