"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import SeoMeta from "@/components/SeoMeta";
import { businessesData, Business } from "@/data/businessesData";
import MemberCard from "@/components/MemberCard";
import PlusLandingPage from "@/components/PlusLandingPage";
import PremiumLandingPage from "@/components/PremiumLandingPage";
import styles from "@/styles/components/BusinessDetailsPage.module.css";

const BusinessDetailsPage: React.FC = () => {
  const { id } = useParams() as { id: string }; // Retrieve the business ID from the URL params
  const businessId = Number.isNaN(Number(id)) ? -1 : parseInt(id, 10);

  const [business, setBusiness] = useState<Business | undefined>(undefined);

  // Use an effect to locate the business and update state
  useEffect(() => {
    const foundBusiness = businessesData.find((b) => b.id === businessId);
    setBusiness(foundBusiness);
  }, [businessId]);

  // Show loading or not found messages if business is undefined
  if (!business) {
    return (
      <div className={styles.notFound}>
        <SeoMeta
          pageKey="businessDetails"
          customMeta={{
            title: "Business Not Found - KKLC Explore",
            description: "The business you're looking for could not be found.",
          }}
        />
        <h2>Business Not Found</h2>
        <p>We couldn’t find the business you’re looking for. Please try again later.</p>
      </div>
    );
  }

  // Clean up and ensure proper membership rendering
  const membershipLevel = business.membershipLevel?.trim().toLowerCase();

  switch (membershipLevel) {
    case "standard":
      return (
        <>
          <SeoMeta
            pageKey="businessDetails"
            customMeta={{
              title: `${business.name} - KKLC Explore`,
              description: `${business.name} offers ${business.subcategory} services in Kugenuma Kaigan.`,
            }}
          />
          <div className={styles.standardMember}>
            <MemberCard business={business} />
          </div>
        </>
      );

    case "plus":
      return <PlusLandingPage business={business} />;

    case "premium":
      return <PremiumLandingPage business={business} />;

    default:
      return (
        <div className={styles.unknownMember}>
          <p>Membership level not recognized.</p>
        </div>
      );
  }
};

export default BusinessDetailsPage;
