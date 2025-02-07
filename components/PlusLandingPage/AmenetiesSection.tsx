import React from "react";
import { StoreAmenities } from "@/data/businessesData";
import styles from "@/styles/components/PlusLandingPage.module.css";

interface AmenitiesSectionProps {
  amenities: StoreAmenities;
}

const AmenitiesSection: React.FC<AmenitiesSectionProps> = ({ amenities }) => {
  return (
    <section className={`${styles.amenitiesSection} p-6 sm:p-8 rounded-lg shadow-md w-full`}>
      <h2 className="text-2xl sm:text-3xl font-bold mb-4">Store Amenities</h2>
      <ul className="list-disc pl-5 space-y-2">
        {amenities.wifiAvailable && <li className="text-gray-700">Wi-Fi Available</li>}
        {amenities.reservationsAccepted && <li className="text-gray-700">Reservations Accepted</li>}
        {amenities.parkingAvailable && <li className="text-gray-700">Parking Available</li>}
        {amenities.deliveryAvailable && <li className="text-gray-700">Delivery Available</li>}
        {amenities.petFriendly && <li className="text-gray-700">Pet Friendly</li>}
        {amenities.paymentOptions && (
          <li className="text-gray-700">
            Payment Options: <span>{amenities.paymentOptions.join(", ")}</span>
          </li>
        )}
      </ul>
    </section>
  );
};

export default AmenitiesSection;
