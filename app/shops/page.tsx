"use client";

import React from "react";
import MemberCards from "@/components/MemberCards"; // Correct import (plural)
import SeoMeta from "@/components/SeoMeta";

const ShopsPage: React.FC = () => {
  return (
    <>
      <SeoMeta pageKey="shops" />
      <header className="text-center py-6">
        <h1 className="text-3xl font-bold">KKLC Explore - Shops Directory</h1>
        <p className="mt-2">
          Discover the best shops in Kugenuma Kaigan, including unique boutiques, vintage stores, and specialty shops.
        </p>
      </header>
      <main className="main-container">
        {/* Render member cards filtered by the "shops" industry */}
        <MemberCards industry="shops" />
      </main>
    </>
  );
};

export default ShopsPage;
