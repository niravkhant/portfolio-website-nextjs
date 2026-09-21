"use client";

import { useEffect, useRef } from "react";
import Button from "@/components/ui/Button/Button";
import styles from "./FormFeedbackModal.module.scss";

export default function FormFeedbackModal({ variant, open, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open || !variant) return null;

  const isSuccess = variant === "success";

  return (
    <div className={styles.root} role="presentation">
      <button
        type="button"
        className={styles.backdrop}
        aria-label="Close dialog"
        onClick={onClose}
      />
      <div
        ref={dialogRef}
        tabIndex={-1}
        className={styles.dialog}
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="form-feedback-title"
        aria-describedby="form-feedback-desc"
      >
        <div
          className={`${styles.iconWrap} ${isSuccess ? styles.iconSuccess : styles.iconFailure}`}
          aria-hidden="true"
        >
          {isSuccess ? (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12.5 9.5 17 19 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path
                d="M8 8l8 8M16 8l-8 8"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </div>
        <h3 id="form-feedback-title" className={styles.title}>
          {isSuccess ? "Success" : "Failure"}
        </h3>
        <p id="form-feedback-desc" className={styles.message}>
          {isSuccess
            ? "Thank you! Your message has been received. I'll get back to you soon."
            : "Something went wrong while sending your message. Please try again or email me directly."}
        </p>
        <Button
          type="button"
          variant={isSuccess ? "primary" : "outline"}
          fullWidth
          onClick={onClose}
        >
          {isSuccess ? "Done" : "Try Again"}
        </Button>
      </div>
    </div>
  );
}
