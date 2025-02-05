"use client";

import React from "react";
import MemberCards from "@/components/MemberCards"; // Correct import (plural)
import SeoMeta from "@/components/SeoMeta";

const RestaurantsPage: React.FC = () => {
  return (
    <>
      <SeoMeta pageKey="restaurants" />
      <header className="text-center py-6">
        <h1 className="text-3xl font-bold">KKLC Explore - Restaurant Directory</h1>
        <p className="mt-2">
          Explore the finest restaurants in Kugenuma Kaigan, offering a variety of cuisines and experiences.
        </p>
      </header>
      <main className="main-container">
        {/* Render all restaurants using the plural MemberCards component */}
        <MemberCards industry="restaurants" />
      </main>
    </>
  );
};

export default RestaurantsPage;
