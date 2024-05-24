"use client";

import { useEffect, useState } from "react";
import styles from "./contactFormSection.module.css";
import { useContact } from "@/app/hooks/contact";
import Loader from "@/app/ui/components/loader/loader";

const ContactFormSection = ({lang}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    token: process.env.NEXT_PUBLIC_REST_PLUGIN_API_KEY,
  });

  const { sendContactDetail, loading, success } = useContact();

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const clearFormData = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
      token: process.env.NEXT_PUBLIC_REST_PLUGIN_API_KEY,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    sendContactDetail(formData);
  };


  useEffect(() => {
    if (success) {
      clearFormData();      
    }
  }, [success]);
  return (
    <section className={styles.contact_form_section}>
      <div className={styles.container}>
        <div className={styles.contact_form}>
          <form onSubmit={handleFormSubmit}>
            <div className={styles.contact_form_content}>
              <h4 className={styles.contact_form_question}>{lang.form.subheading}</h4>
              <h5 className={styles.contact_form_title}>{lang.form.heading}</h5>
            </div>
            <div className={styles.contact_form_group}>
              <input
                name="name"
                value={formData.name}
                type="text"
                placeholder={lang.form.name}
                onChange={handleOnChange}
              />
            </div>
            <div className={styles.contact_form_group}>
              <input
                name="email"
                value={formData.email}
                type="email"
                placeholder={lang.form.email}
                onChange={handleOnChange}
              />
            </div>
            <div className={styles.contact_form_group}>
              <textarea
                name="message"
                rows={6}
                placeholder={lang.form.message}
                value={formData.message}
                onChange={handleOnChange}
              ></textarea>
            </div>
            <button type="submit"> {loading ? <Loader /> : lang.form.button} </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
