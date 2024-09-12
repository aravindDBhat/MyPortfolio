import { useState } from "react";
import emailjs from "@emailjs/browser";
function Contact() {
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");

  const [email, setEmail] = useState("");

  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const HandleFname = (e) => {
    if (error) setError("");

    setFname(e.target.value);
  };
  const HandleEmail = (e) => {
    if (error) setError("");

    setEmail(e.target.value);
  };
  const HandleLname = (e) => {
    if (error) setError("");

    setLname(e.target.value);
  };
  const HandlePhone = (e) => {
    if (error) setError("");

    setPhone(e.target.value);
  };
  const HandleMessage = (e) => {
    if (error) setError("");

    setMessage(e.target.value);
  };

  const validate = () => {
    if (!Fname) {
      setError("Please enter the First Name");
      return 0;
    }
    if (!Lname) {
      setError("Please enter the Last Name");
      return 0;
    }
    if (!phone) {
      setError("Please enter the Phone number");
      return 0;
    }
    if (!email) {
      setError("Please enter the Email");
      return 0;
    }
    if (!message) {
      setError("Please enter the Message");
      return 0;
    }
    return 1;
  };

  async function mailSender(e) {
    const parameters = {
      email: email,
      FName: Fname,
      LName: Lname,
      phone: phone,
      message: message,
    };
    const val = validate();
    console.log(parameters);
    if (val) {
      console.log("hjgyjgvyfuygv");
      emailjs.send("serviceid", "templeteid", parameters, "publickey").then(
        (result) => {
          setError("Mail sent successfully");
        },
        (err) => {
          console.log(err);
          setError(err.message);
        }
      );
      setEmail("");
      setLname("");
      setFname("");
      setMessage("");
      setPhone("");
    }
    console.log("error is : ", error);
  }

  return (
    <div className="mt-5 contact">
      <div className="mail">
        <div className="mt-3 head">
          <span>Send a message</span>
        </div>
        <div className="sendername">
          <input
            type="text"
            value={Fname}
            name="FName"
            placeholder="First Name"
            onChange={HandleFname}
            required
          />
          <input
            type="text"
            value={Lname}
            name="LName"
            placeholder="Last Name"
            onChange={HandleLname}
            required
          />
        </div>
        <div className="cInfo">
          <input
            type="text"
            value={phone}
            name="phone"
            placeholder="Phone Number"
            onChange={HandlePhone}
            required
          />
          <input
            type="email"
            value={email}
            name="email"
            placeholder="Email Id"
            onChange={HandleEmail}
            required
          />
        </div>
        <div className="message">
          <textarea
            placeholder="Message"
            name="message"
            value={message}
            cols="52"
            rows="5"
            onChange={HandleMessage}
            required
          ></textarea>
        </div>
        {error ? (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        ) : (
          ""
        )}
        <div className="submit">
          <button type="submit" onClick={mailSender}>
            Send Message
          </button>
        </div>
      </div>
      <div className="contactInfo">
        <div className="head">
          <span>Contact Information</span>
        </div>
        <div className="info">
          <span>
            <i className="fa-solid fa-phone"></i> +91 8296576089
          </span>
          <span>
            <i className="fa-solid fa-envelope"></i> aravindbhat88@gmail.com
          </span>
        </div>
        <div className="footer">
          <a href="https://github.com/aravindDBhat">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/aravind-bhat-98754426b">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Contact;
