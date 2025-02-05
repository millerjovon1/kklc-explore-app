"use client";

import React from "react";
import MemberCards from "@/components/MemberCards"; // Correct import (plural)
import SeoMeta from "@/components/SeoMeta";

const ClinicsPage: React.FC = () => {
  return (
    <>
      <SeoMeta pageKey="clinics" />
      <header className="text-center py-6">
        <h1 className="text-3xl font-bold">KKLC Explore - Clinic Directory</h1>
        <p className="mt-2">
          Discover the best medical clinics in Kugenuma Kaigan, offering trusted healthcare services for you and your family.
        </p>
      </header>
      <main className="main-container">
        {/* Render all clinics using the plural MemberCards component */}
        <MemberCards industry="clinics" />
      </main>
    </>
  );
};

export default ClinicsPage;
