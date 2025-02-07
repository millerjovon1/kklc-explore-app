"use client";

import React from "react";
import { Business } from "@/data/businessesData";
import MemberCard from "./MemberCard";
import styles from "@/styles/components/MemberCard.module.css";
import Link from "next/link";

interface MemberCardsProps {
  businesses: Business[];
  industry: string;
}

const MemberCards: React.FC<MemberCardsProps> = ({ businesses, industry }) => {
  const filteredBusinesses = businesses.filter(
    (business) => business.industry.toLowerCase() === industry.toLowerCase()
  );

  if (filteredBusinesses.length === 0) {
    return (
      <div className={styles.noBusinesses}>
        <p className="text-center text-lg">No businesses found for industry: {industry}</p>
      </div>
    );
  }

  return (
    <div className={styles.cardsWrapper}>
      {filteredBusinesses.map((business) => {
        const linkDestination = `/business-details/${business.id}`;

        return (
          <Link key={business.id} href={linkDestination} passHref legacyBehavior>
            <div className={`${styles.cardContainer} group cursor-pointer`}>
              <MemberCard business={business} />
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default MemberCards;
