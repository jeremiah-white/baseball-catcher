import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import ReCaptchaWrapper from "@/components/ReCaptchaWrapper";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact the owner of Baseball-Catcher.com.",
  keywords: ["baseball", "catcher", "catching", "contact information", "contact info", "email"],
};

export default function ContactPage() {
  return (
    <div className="content-wrapper">
      <div className="main-content" style={{ maxWidth: "600px" }}>
        <h1 className="page-header">Contact Us</h1>
        <p>
          Have a question, suggestion, or feedback? We&apos;d love to hear from you!
          Fill out the form below and we&apos;ll get back to you as soon as possible.
        </p>
        <ReCaptchaWrapper>
          <ContactForm />
        </ReCaptchaWrapper>
      </div>
    </div>
  );
}
