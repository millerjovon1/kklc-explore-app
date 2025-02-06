import React from "react";
import { FaInstagram, FaYoutube, FaTiktok, FaTwitter, FaLine } from "react-icons/fa";
import MapSection from "@/components/PlusLandingPage/MapSection";  // Import the map component
import styles from "@/styles/components/PlusLandingPage.module.css";

interface ContactSectionProps {
  phone: string;
  email?: string;
  website: string;
  name: string;
  socials?: {
    instagram?: string | null;
    youtube?: string | null;
    tiktok?: string | null;
    twitter?: string | null;
    line?: string | null;
  };
  mapEmbedUrl: string;
  placeName?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ phone, email, website, name, socials, mapEmbedUrl, placeName }) => {
  const socialIcons = [
    { platform: "instagram", icon: <FaInstagram />, url: socials?.instagram },
    { platform: "youtube", icon: <FaYoutube />, url: socials?.youtube },
    { platform: "tiktok", icon: <FaTiktok />, url: socials?.tiktok },
    { platform: "twitter", icon: <FaTwitter />, url: socials?.twitter },
    { platform: "line", icon: <FaLine />, url: socials?.line },
  ];

  return (
    <section className={`${styles.contactSection} flex flex-col md:flex-row gap-6 items-start`}>
      {/* Left Side - Contact Information */}
      <div className="w-full md:w-1/2 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
        <p><strong>Phone:</strong> {phone}</p>
        <p><strong>Email:</strong> {email || "Not available"}</p>
        <p>
          <strong>Website:</strong>{" "}
          <a href={website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            Visit {name}
          </a>
        </p>

        {/* Social Media Links Section */}
        {socials && (
          <div className="mt-4">
            <h3 className="text-xl font-semibold">Connect with Us:</h3>
            <div className="flex gap-4 mt-2">
              {socialIcons.map(
                (social) =>
                  social.url && (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-blue-600 text-2xl"
                      aria-label={social.platform}
                    >
                      {social.icon}
                    </a>
                  )
              )}
            </div>
          </div>
        )}
      </div>

      {/* Right Side - Map Section */}
      <div className="w-full md:w-1/2">
        <MapSection embedUrl={mapEmbedUrl} placeName={placeName} />
      </div>
    </section>
  );
};

export default ContactSection;
