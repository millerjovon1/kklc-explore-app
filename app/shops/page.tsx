// pages/restaurants.tsx
"use client";

import React from "react";

import MemberCards from "@/components/MemberCard"; // This component should accept an "industry" prop for filtering
import SeoMeta from '@/components/SeoMeta';


const ShopsPage: React.FC = () => {
  return (
    <>
    <SeoMeta pageKey="shops" />
      <header className="text-center py-6">
        <h1 className="text-3xl font-bold">KKLC Explore - Restaurant Directory</h1>
        <p className="mt-2">
          Explore the finest restaurants in Kugenuma Kaigan, offering a variety of cuisines and experiences.
        </p>
      </header>
      <main className="main-container">
        {/* Render member cards filtered by the "restaurants" industry */}
        <MemberCards industry="restaurants" />
      </main>
    </>
  );
};

export default ShopsPage;
