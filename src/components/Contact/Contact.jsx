"use client";

import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { siteMeta } from "@/data/portfolioData";
import Card from "@/components/ui/Card/Card";
import Button from "@/components/ui/Button/Button";
import FadeIn from "@/components/ui/FadeIn/FadeIn";
import FormFeedbackModal from "@/components/ui/FormFeedbackModal/FormFeedbackModal";
import {
  ExternalLinkIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
} from "@/components/ui/icons/ContactIcons";
import { collectSubmissionMeta } from "@/lib/contact/clientSubmissionMeta";
import styles from "./Contact.module.scss";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  const closeFeedback = useCallback(() => setFeedback(null), []);

  useEffect(() => {
    if (!isSubmitting) return undefined;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isSubmitting]);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setFeedback(null);

    try {
      const meta = await collectSubmissionMeta();
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, meta }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      reset();
      setFeedback("success");
    } catch {
      setFeedback("failure");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={styles.section} aria-labelledby="contact-title">
      {isSubmitting && (
        <div className={styles.screenOverlay} aria-live="polite" aria-busy="true">
          <div className={styles.screenLoader}>
            <span className={styles.spinner} aria-hidden="true" />
            <span className={styles.loaderText}>Sending message…</span>
          </div>
        </div>
      )}

      <FormFeedbackModal
        variant={feedback}
        open={feedback !== null}
        onClose={closeFeedback}
      />

      <div className="section-container">
        <div className={styles.layout}>
          <FadeIn>
            <h2 id="contact-title" className={styles.introTitle}>
              Let&apos;s Build Something
              <br />
              Great Together.
            </h2>
            <p className={styles.introText}>
              Have a project, opportunity or idea? Let&apos;s talk.
            </p>
            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Email</span>
                <span className={styles.infoValue}>
                  <a className={styles.infoLink} href={`mailto:${siteMeta.email}`}>
                    <MailIcon className={styles.infoIcon} />
                    <span>{siteMeta.email}</span>
                  </a>
                </span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>LinkedIn</span>
                <span className={styles.infoValue}>
                  <a
                    className={styles.infoLink}
                    href={siteMeta.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon className={styles.infoIcon} />
                    <span>LinkedIn Profile</span>
                    <ExternalLinkIcon className={styles.linkIcon} />
                  </a>
                </span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>GitHub</span>
                <span className={styles.infoValue}>
                  <a
                    className={styles.infoLink}
                    href={siteMeta.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubIcon className={styles.infoIcon} />
                    <span>GitHub Profile</span>
                    <ExternalLinkIcon className={styles.linkIcon} />
                  </a>
                </span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Location</span>
                <span className={`${styles.infoValue} ${styles.infoStatic}`}>
                  <MapPinIcon className={styles.infoIcon} />
                  <span>{siteMeta.location}</span>
                </span>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <Card className={styles.formCard}>
              <form
                className={styles.form}
                onSubmit={handleSubmit(onSubmit)}
                noValidate
              >
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="contact-name">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      className={styles.input}
                      autoComplete="name"
                      disabled={isSubmitting}
                      aria-invalid={errors.name ? "true" : "false"}
                      {...register("name", { required: "Please enter your name." })}
                    />
                    {errors.name && (
                      <span className={styles.error} role="alert">
                        {errors.name.message}
                      </span>
                    )}
                  </div>

                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="contact-email">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      className={styles.input}
                      autoComplete="email"
                      disabled={isSubmitting}
                      aria-invalid={errors.email ? "true" : "false"}
                      {...register("email", {
                        required: "Please enter your email.",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Please enter a valid email address.",
                        },
                      })}
                    />
                    {errors.email && (
                      <span className={styles.error} role="alert">
                        {errors.email.message}
                      </span>
                    )}
                  </div>

                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="contact-subject">
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      className={styles.input}
                      disabled={isSubmitting}
                      aria-invalid={errors.subject ? "true" : "false"}
                      {...register("subject", { required: "Please add a subject." })}
                    />
                    {errors.subject && (
                      <span className={styles.error} role="alert">
                        {errors.subject.message}
                      </span>
                    )}
                  </div>

                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="contact-message">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      className={styles.textarea}
                      disabled={isSubmitting}
                      aria-invalid={errors.message ? "true" : "false"}
                      {...register("message", {
                        required: "Please write your message.",
                        minLength: {
                          value: 10,
                          message: "Message should be at least 10 characters.",
                        },
                      })}
                    />
                    {errors.message && (
                      <span className={styles.error} role="alert">
                        {errors.message.message}
                      </span>
                    )}
                  </div>

                  <Button type="submit" variant="primary" fullWidth disabled={isSubmitting}>
                    {isSubmitting ? "Sending…" : "Send Message"}
                </Button>
              </form>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
