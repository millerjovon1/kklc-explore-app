"use client";

import React from "react";
import MemberCards from "@/components/MemberCards"; // Correct import (plural)
import SeoMeta from "@/components/SeoMeta";

const OtherPage: React.FC = () => {
  return (
    <>
      <SeoMeta pageKey="other" />
      <header className="text-center py-6">
        <h1 className="text-3xl font-bold">KKLC Explore - Other Directory</h1>
        <p className="mt-2">
          Explore additional services and businesses in Kugenuma Kaigan, offering a variety of experiences.
        </p>
      </header>
      <main className="main-container">
        {/* Render all "other" businesses using the plural MemberCards component */}
        <MemberCards industry="other" />
      </main>
    </>
  );
};

export default OtherPage;
