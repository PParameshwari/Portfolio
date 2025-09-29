// import React from "react";
import "../../styles/Contact/contact.scss";
import AddLocationOutlinedIcon from "@mui/icons-material/AddLocationOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import MarkEmailUnreadOutlinedIcon from "@mui/icons-material/MarkEmailUnreadOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Footer from "../Footer/footer";

const Contact = () => {
  return (
    <section className="contact">
      <h2 className="contact-title">
        Get In Touch <span className="dot">.</span>
      </h2>
      <p className="contact-desc">
        I am always open to new opportunities and collaborations. Whether you
        have a project to discuss, questions about my work, or simply want to
        connect, I would be delighted to hear from you. Effective communication
        and collaboration are key to delivering exceptional results.
      </p>

      <div className="contact-wrapper">
        {/* Left Side Info */}
        <div className="contact-info">
          <div className="right-side">
            {/* Address */}
            <div className="info-item">
              <AddLocationOutlinedIcon className="icon" />
              <div>
                <h4>Address</h4>
                <p>Electronic City, Bangalore</p>
              </div>
            </div>

            {/* Call */}
            <div className="info-item">
              <a href="tel:+916381289244" className="icon-link">
                <LocalPhoneOutlinedIcon className="icon" />
              </a>
              <div>
                <h4>Call Us</h4>
                {/* <a href="tel:+916381289244"></a> */}
              </div>
            </div>
          </div>

          <div className="left-side">
            {/* Email */}
            <div className="info-item">
              <a
                href="mailto:parameshwaripavithra22@gmail.com"
                className="icon-link"
              >
                <MarkEmailUnreadOutlinedIcon className="icon" />
              </a>
              <div>
                <h4>Email Us</h4>
                {/* <a href="mailto:parameshwaripavithra22@gmail.com">
                  parameshwaripavithra22@gmail.com
                </a> */}
              </div>
            </div>

            {/* WhatsApp */}
            <div className="info-item">
              <a
                href="https://wa.me/916381289244"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
              >
                <WhatsAppIcon className="icon" style={{ color: "green" }} />
              </a>
              <div>
                <h4>WhatsApp Us</h4>
                <a
                  href="https://wa.me/916381289244"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </section>
  );
};

export default Contact;
