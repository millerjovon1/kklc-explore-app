"use client";

import React from "react";
import MemberCards from "@/components/MemberCard"; // This component should accept an "industry" prop for filtering
import SeoMeta from '@/components/SeoMeta';

const HealthBeautyPage: React.FC = () => {
  return (
    <>
      <SeoMeta pageKey="health_beauty" />
      <header className="text-center py-6">
        <h1 className="text-3xl font-bold">KKLC Explore - Health & Beauty Directory</h1>
        <p className="mt-2">
          Discover spas, salons, and wellness centers in Kugenuma Kaigan to elevate your well-being.
        </p>
      </header>
      <main className="main-container">
        {/* Render member cards filtered by the "health & beauty" industry */}
        <MemberCards industry="health & beauty" />
      </main>
    </>
  );
};

export default HealthBeautyPage;
