"use client";

import React from "react";
import Image from "next/image";
import { businessesData, Business } from "@/data/businessesData"; // Adjust path as needed
import styles from "@/styles/components/MemberCard.module.css"; // Your CSS module
import { FaInstagram, FaYoutube, FaTiktok, FaTwitter, FaLine } from "react-icons/fa";


// Define the props for the MemberCards component
interface MemberCardsProps {
  industry: string;
}

// Helper function to determine membership class based on business data
const getMembershipClass = (business: Business): string => {
  if (business.membershipLevel === "premium") return styles.premiumBusiness;
  if (business.membershipLevel === "plus") return styles.plusBusiness;
  return styles.standardBusiness;
};

const MemberCards: React.FC<MemberCardsProps> = ({ industry }) => {
  // Filter businesses by the provided industry prop (case-insensitive)
  const filteredBusinesses = businessesData.filter(
    (business) => business.industry.toLowerCase() === industry.toLowerCase()
  );

  if (filteredBusinesses.length === 0) {
    return (
      <div className={styles.businessWrapper}>
        <p className="text-center text-lg">No businesses found for industry: {industry}</p>
      </div>
    );
  }

  return (
    <div className={styles.businessWrapper}>
      {filteredBusinesses.map((business) => {
        const membershipClass = getMembershipClass(business);

        // Build social icons if available
        // Build social icons if available
const socialIcons = (
  <ul className={styles.socialIcons}>
    {business.socials?.instagram && business.socials.instagram.trim() !== "" && (
      <li>
        <a
          href={business.socials.instagram.trim()}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={30} className="text-pink-500" />
        </a>
      </li>
    )}
    {business.socials?.youtube && business.socials.youtube.trim() !== "" && (
      <li>
        <a
          href={business.socials.youtube.trim()}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube size={30} className="text-red-600" />
        </a>
      </li>
    )}
    {business.socials?.tiktok && business.socials.tiktok.trim() !== "" && (
      <li>
        <a
          href={business.socials.tiktok.trim()}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTiktok size={30} className="text-black" />
        </a>
      </li>
    )}
    {business.socials?.twitter && business.socials.twitter.trim() !== "" && (
      <li>
        <a
          href={business.socials.twitter.trim()}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter size={30} className="text-blue-400" />
        </a>
      </li>
    )}
    {business.socials?.line && business.socials.line.trim() !== "" && (
      <li>
        <a
          href={business.socials.line.trim()}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLine size={30} className="text-green-500" />
        </a>
      </li>
    )}
  </ul>
);

        // Map link for addresses starting with "https://"
        const mapLink =
          business.address && business.address.startsWith("https://") ? (
            <p className="text-base">
              <span className="font-bold">Address:</span>{" "}
              <a
                href={business.address}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.viewMapLink}
              >
                View Map
              </a>
            </p>
          ) : (
            <p className="text-base">
              <span className="font-bold">Address:</span> Address not available
            </p>
          );

        // Phone link (if provided)
        const phoneLink =
          business.phone.trim() !== "" ? (
            <a
              href={`tel:${business.phone}`}
              className={`${styles.phoneLink} text-blue-500 underline`}
            >
              {business.phone}
            </a>
          ) : (
            "Phone not available"
          );

        return (
          <section key={business.id} className="section animate">
            <div className={`${styles.business} ${membershipClass} p-4`}>
              <div className={styles.businessProfile}>
                {/* Business image using Next.js Image; intrinsic dimensions defined here */}
                <Image
                  src={business.image}
                  alt={business.name}
                  width={280}
                  height={200}
                  style={{
                    width: "280px",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
                <h2 className="mt-2 text-2xl font-bold">{business.name}</h2>
              </div>
              <div className={styles.info}>
                <h3 className="mt-4 text-xl font-semibold">Store Info</h3>
                <div className={styles.storeInfo}>
                  <div className={styles.storeProfile}>
                    <p className="text-base">
                      <span className="font-bold">Phone:</span> {phoneLink}
                    </p>
                    <p className="text-base">
                      <span className="font-bold">Email:</span> {business.email}
                    </p>
                    {mapLink}
                    <p className="text-base">
                      <span className="font-bold">Hours:</span>{" "}
                      {business.hours.map((hour) => `${hour.day}: ${hour.time}`).join(", ")}
                    </p>
                    <p className="text-base">
                      <span className="font-bold">Industry:</span>{" "}
                      {business.industry.charAt(0).toUpperCase() + business.industry.slice(1)}
                    </p>
                    <p className="text-base">
                      <span className="font-bold">Category:</span> {business.subcategory}
                    </p>
                    <p className="text-base">{business.description}</p>
                  </div>
                  <div className={styles.ownerProfile}>
                    <Image
                    src={business.ownerImage}
                    alt={`Owner of ${business.name}`}
                    width={120}
                    height={120}
                    className={styles.ownerImage}
                    />
                    <p className="text-base">
                      <span className="font-bold">Owner:</span>
                      <br />
                      {business.owner.split(",")
                      .map((name) => name.trim())
                      .map((name, idx) => (
                      <span key={idx} className="block">
                        {name}
                        </span>
                      ))}
                      </p>
                      </div>
                </div>
              </div>
              <div className={styles.businessLinks}>
                <a
                  href={business.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  Visit Website
                </a>
                {socialIcons}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default MemberCards;
