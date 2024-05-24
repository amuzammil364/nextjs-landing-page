import axios from "axios";
import { useState } from "react";
import errorToast from "../ui/components/toast/errorToast/errorToast";
import successToast from "../ui/components/toast/successToast/successToast";

export const useContact = () => {
  const [loading, setLoading] = useState(false);

  const sendContactDetail = async (data) => {
    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost/wordpress_custom_plugins/wp-json/muzammil/v1/contact-form?token=a9fce432af0130bf5297e2a3bedad906",
        data
      );
      console.log(res);
      setLoading(false);
      successToast(res?.data);
    } catch (err) {
      console.log(err);
      setLoading(false);
      errorToast(err?.response?.data?.message);
    }
  };

  return {
    sendContactDetail,
    loading,
  };
};
