import axios from "axios";
import { useState } from "react";
import errorToast from "../ui/components/toast/errorToast/errorToast";
import successToast from "../ui/components/toast/successToast/successToast";

export const useContact = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendContactDetail = async (data) => {
        
    setLoading(true);
    setSuccess(false);
    try {
      const res = await axios.post(
        process.env.NEXT_PUBLIC_REST_PLUGIN_API_ENDPOINT,
        data
      );
      setLoading(false);
      setSuccess(true);
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
    success,
  };
};
