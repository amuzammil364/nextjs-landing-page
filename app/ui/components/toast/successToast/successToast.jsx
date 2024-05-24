"use client";
import { toast } from "react-toastify";
import styles from "./successToast.module.css";

const successToast = (message) => {
  return toast.success(`${message}`, {
    draggable: true,
    pauseOnHover: true,
    className: styles.successToast,
  });
};

export default successToast;
