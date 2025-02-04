"use client";

import React from "react";
import { useParams } from "next/navigation"; // Correct way in App Router
import SeoMeta from "@/components/SeoMeta";
import { businessesData } from "@/data/businessesData";
import { Business } from "@/data/businessesData";
import MemberCards from "@/components/MemberCard";

const BusinessDetailsPage: React.FC = () => {
  const params = useParams(); // Access route parameter
  const { id } = params as { id: string };

  // Find the business by ID
  const business: Business | undefined = businessesData.find(
    (b) => b.id === parseInt(id, 10)
  );

  // Handle case where business is not found
  if (!business) {
    return (
      <div className="text-center py-10">
        <SeoMeta
          pageKey="businessDetails"
          customMeta={{
            title: "Business Not Found - KKLC Explore",
            description: "The business you're looking for could not be found.",
          }}
        />
        <h2 className="text-2xl font-bold">Business Not Found</h2>
        <p className="mt-2">We couldn’t find the business you’re looking for. Please try again later.</p>
      </div>
    );
  }

  return (
    <>
      <SeoMeta
        pageKey="businessDetails"
        customMeta={{
          title: `${business.name} - KKLC Explore`,
          description: `${business.name} offers ${business.subcategory} services in Kugenuma Kaigan.`,
        }}
      />

      {business.membershipLevel === "standard" ? (
        <div className="main-container py-10">
          <h1 className="text-3xl font-bold">Business Information</h1>
          <p className="text-lg mt-2">This business is a standard member and displays limited details.</p>
          {/* Render the business card */}
          <MemberCards industry={business.industry} />
        </div>
      ) : (
        <main className="main-container py-10">
          <h1 className="text-4xl font-bold">{business.name}</h1>
          <p className="text-xl mt-2">
            <strong>Subcategory:</strong> {business.subcategory}
          </p>
          <p className="text-lg mt-2">
            <strong>Industry:</strong> {business.industry}
          </p>
          <p className="mt-2">
            <strong>Description:</strong> {business.description}
          </p>
          <p className="mt-2">
            <strong>Phone:</strong> {business.phone}
          </p>
          <p className="mt-2">
            <strong>Email:</strong> {business.email || "Not available"}
          </p>

          <div className="mt-4">
            <h3 className="text-2xl font-semibold">Business Hours</h3>
            <ul className="list-disc pl-5">
              {business.hours.map((hour, index) => (
                <li key={index}>
                  {hour.day}: {hour.time}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5">
            {business.address && (
              <p>
                <strong>Address:</strong> {business.address}
              </p>
            )}

            {business.socials && (
              <div className="mt-4">
                <h3 className="text-2xl font-semibold">Follow Us</h3>
                <div className="flex gap-4">
                  {business.socials.instagram && (
                    <a
                      href={business.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-instagram text-pink-500 text-3xl"></i>
                    </a>
                  )}
                  {business.socials.youtube && (
                    <a
                      href={business.socials.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-youtube text-red-600 text-3xl"></i>
                    </a>
                  )}
                  {business.socials.twitter && (
                    <a
                      href={business.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-twitter text-blue-500 text-3xl"></i>
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </main>
      )}
    </>
  );
};

export default BusinessDetailsPage;
