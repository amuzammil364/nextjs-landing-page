"use client";

import { useState } from "react";
import styles from "./contactFormSection.module.css";
import { useContact } from "@/app/hooks/contact";
import Loader from "@/app/ui/components/loader/loader";

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { sendContactDetail, loading } = useContact();

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const clearFormData = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    sendContactDetail(formData);
    clearFormData();
  };

  return (
    <section className={styles.contact_form_section}>
      <div className={styles.container}>
        <div className={styles.contact_form}>
          <form onSubmit={handleFormSubmit}>
            <div className={styles.contact_form_content}>
              <h4 className={styles.contact_form_question}>Any questions?</h4>
              <h5 className={styles.contact_form_title}>Let's talk today!</h5>
            </div>
            <div className={styles.contact_form_group}>
              <input
                name="name"
                value={formData.name}
                type="text"
                placeholder="Name"
                onChange={handleOnChange}
              />
            </div>
            <div className={styles.contact_form_group}>
              <input
                name="email"
                value={formData.email}
                type="email"
                placeholder="Email"
                onChange={handleOnChange}
              />
            </div>
            <div className={styles.contact_form_group}>
              <textarea
                name="message"
                rows={6}
                placeholder="Message"
                value={formData.message}
                onChange={handleOnChange}
              ></textarea>
            </div>
            <button type="submit"> {loading ? <Loader /> : "Submit"} </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
