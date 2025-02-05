import React from "react";
import styles from "@/styles/components/PlusLandingPage.module.css";

interface ContactSectionProps {
  phone: string;
  email?: string;
  website: string;
  name: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ phone, email, website, name }) => {
  return (
    <section className={styles.contactSection}>
      <h2>Contact Information</h2>
      <p><strong>Phone:</strong> {phone}</p>
      <p><strong>Email:</strong> {email || "Not available"}</p>
      <p>
        <strong>Website:</strong>{" "}
        <a href={website} target="_blank" rel="noopener noreferrer" className={styles.link}>
          Visit {name}
        </a>
      </p>
    </section>
  );
};

export default ContactSection;
