import React from "react";
import styles from "@/styles/components/PlusLandingPage.module.css";

interface StoreInfoSectionProps {
  phone: string;
  email?: string;
  address?: string;
  hours: { day: string; time: string }[];
}


const StoreInfoSection: React.FC<StoreInfoSectionProps> = ({ phone, email, hours }) => {
  return (
    <section className={`${styles.storeInfoSection} p-6 bg-white rounded-lg shadow-md`}>
      <h2 className="text-xl font-bold mb-4">Store Information</h2>

      <p className="mb-2">
        <strong>Phone:</strong> {phone}
      </p>
      <p className="mb-2">
        <strong>Email:</strong> {email || "Not available"}
      </p>


      <h3 className="text-lg font-semibold mt-4">Hours of Operation:</h3>
      <ul className="list-disc pl-6 mt-2">
        {hours.map((hour, index) => (
          <li key={index}>
            {hour.day}: {hour.time}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default StoreInfoSection;
