import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function SendmailAll() {
  const [email, setEmail] = useState({
    recipients: "",
    subject: "",
    body: "",
  });

  // Update the email state when user types in the input fields
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEmail((prevEmail) => ({
      ...prevEmail,
      [name]: value,
    }));
  };

  // Update the email state when user types in the Quill editor
  const handleQuillChange = (value) => {
    setEmail((prevEmail) => ({
      ...prevEmail,
      body: value,
    }));
  };

  // Send the email using the email state
  const sendEmail = () => {
    const recipientsArray = email.recipients.split(",");
    recipientsArray.forEach((recipient) => {
      // Logic for sending email to each recipient goes here
    });
  };

  return (
    <div className="smail">
      <form>
        <label>Recipients (separated by commas):</label>
        <input
          type="text"
          name="recipients"
          value={email.recipients}
          onChange={handleInputChange}
        />

        <label>Subject:</label>
        <input
          type="text"
          name="subject"
          value={email.subject}
          onChange={handleInputChange}
        />

        <label>Body:</label>
        <ReactQuill value={email.body} onChange={handleQuillChange} />

        <button type="button" onClick={sendEmail}>
          Send Email
        </button>
      </form>

      <style>{`
        /* Customize the appearance of the email template */
        form {
          display: flex;
          flex-direction: column;
          margin: 20px;
        }

        label {
          font-weight: bold;
          margin-top: 10px;
        }

        input {
          padding: 10px;
          margin-bottom: 20px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }

        .ql-editor {
          height: 200px;
          border: 1px solid #ccc;
          border-radius: 5px;
          padding: 10px;
          font-size: 16px;
        }

        button {
          margin-top: 20px;
          padding: 10px;
          border-radius: 5px;
          background-color: #4caf50;
          color: #fff;
          font-size: 16px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}

export default SendmailAll;
