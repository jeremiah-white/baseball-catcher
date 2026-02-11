"use client";

import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileRef = useRef<TurnstileInstance>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    if (!turnstileToken) {
      setStatus("error");
      setErrorMessage("Please complete the verification");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, turnstileToken }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message");
      }

      setStatus("success");
      reset();
      setTurnstileToken(null);
      turnstileRef.current?.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "An error occurred");
      turnstileRef.current?.reset();
    }
  };

  if (status === "success") {
    return (
      <div className="contact-form__success">
        <h3>Thank you for your message!</h3>
        <p>We&apos;ll get back to you as soon as possible.</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="contact-form__button"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
      <p style={{color: 'red'}}>DEBUG: {JSON.stringify(process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY) || 'ENV VAR IS EMPTY'} (length: {process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.length})</p>
      <div className="contact-form__field">
        <label htmlFor="name" className="contact-form__label">
          Name <span className="contact-form__required">*</span>
        </label>
        <input
          type="text"
          id="name"
          className="contact-form__input"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && (
          <span className="contact-form__error">{errors.name.message}</span>
        )}
      </div>

      <div className="contact-form__field">
        <label htmlFor="email" className="contact-form__label">
          Email <span className="contact-form__required">*</span>
        </label>
        <input
          type="email"
          id="email"
          className="contact-form__input"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && (
          <span className="contact-form__error">{errors.email.message}</span>
        )}
      </div>

      <div className="contact-form__field">
        <label htmlFor="subject" className="contact-form__label">
          Subject <span className="contact-form__required">*</span>
        </label>
        <input
          type="text"
          id="subject"
          className="contact-form__input"
          {...register("subject", { required: "Subject is required" })}
        />
        {errors.subject && (
          <span className="contact-form__error">{errors.subject.message}</span>
        )}
      </div>

      <div className="contact-form__field">
        <label htmlFor="message" className="contact-form__label">
          Message <span className="contact-form__required">*</span>
        </label>
        <textarea
          id="message"
          rows={6}
          className="contact-form__input contact-form__textarea"
          {...register("message", { required: "Message is required" })}
        />
        {errors.message && (
          <span className="contact-form__error">{errors.message.message}</span>
        )}
      </div>

      {status === "error" && (
        <div className="contact-form__error-message">
          {errorMessage}
        </div>
      )}

      <div className="contact-form__turnstile">
        <Turnstile
          ref={turnstileRef}
          siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.trim() || ''}
          onSuccess={setTurnstileToken}
          onError={() => setTurnstileToken(null)}
          onExpire={() => setTurnstileToken(null)}
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="contact-form__button"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
