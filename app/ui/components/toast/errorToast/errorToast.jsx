"use client";
import { toast } from "react-toastify";
import styles from "./errorToast.module.css";

const errorToast = (message) => {
  return toast.error(`${message}`, {
    draggable: true,
    pauseOnHover: true,
    className: styles.errorToast,
  });
};

export default errorToast;
