"use client";

import React, { useState } from "react";
import MemberCards from "@/components/MemberCards";
import SeoMeta from "@/components/SeoMeta";
import { Business, businessesData } from "@/data/businessesData";
import SearchBar from "@/components/SearchBar";

const OtherPage: React.FC = () => {
  const [filteredBusinesses, setFilteredBusinesses] = useState<Business[]>(businessesData);

  const handleFilter = (filtered: Business[]) => {
    setFilteredBusinesses(filtered);
  };

  return (
    <>
      <SeoMeta pageKey="other" />
      <header className="text-center py-6">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
          KKLC Explore - Other Directory
        </h1>
        <p className="mt-2 text-xs md:text-sm lg:text-base">
          Explore additional services and businesses in Kugenuma Kaigan, offering a variety of experiences.
        </p>
      </header>

      {/* Centered and responsive search bar */}
      <div className="flex justify-center py-4 px-4 md:px-0">
        <div className="w-full max-w-md">
          <SearchBar mode="page" onType={handleFilter} />
        </div>
      </div>

      <main className="main-container">
        <MemberCards businesses={filteredBusinesses} industry="other" />
      </main>
    </>
  );
};

export default OtherPage;
