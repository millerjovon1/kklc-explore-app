"use client";

import React, { useState } from "react";
import MemberCards from "@/components/MemberCards";
import SeoMeta from "@/components/SeoMeta";
import { Business, businessesData } from "@/data/businessesData";
import SearchBar from "@/components/SearchBar";

const ClinicsPage: React.FC = () => {
  const [filteredBusinesses, setFilteredBusinesses] = useState<Business[]>(businessesData);

  const handleFilter = (filtered: Business[]) => {
    setFilteredBusinesses(filtered);
  };

  return (
    <>
      <SeoMeta pageKey="clinics" />
      <header className="text-center py-6">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
          KKLC Explore - Clinic Directory
        </h1>
        <p className="mt-2 text-xs md:text-sm lg:text-base">
          Discover the best medical clinics in Kugenuma Kaigan, offering trusted healthcare services for you and your family.
        </p>
      </header>

      {/* Centered and responsive search bar */}
      <div className="flex justify-center py-4 px-4 md:px-0">
        <div className="w-full max-w-md">
          <SearchBar mode="page" onType={handleFilter} />
        </div>
      </div>

      <main className="main-container">
        <MemberCards businesses={filteredBusinesses} industry="clinics" />
      </main>
    </>
  );
};

export default ClinicsPage;
