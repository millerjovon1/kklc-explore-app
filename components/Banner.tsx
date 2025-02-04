"use client";

import { FaBars } from "react-icons/fa"; // Mobile menu toggle, if needed
import SearchBar from "./SearchBar"; // Import the SearchBar component
import styles from "@/styles/components/Banner.module.css";
import { useRouter } from "next/navigation"; // Import Next.js router

const Banner: React.FC = () => {
  const router = useRouter(); // Initialize Next.js router

  const handleSuggestionClick = (businessId: number) => {
    // Navigate to dynamic route using router.push
    router.push(`/business-details/${businessId}`);
  };

  return (
    <div className={styles.homeBanner}>
      <div className={styles.homeTitle}>
        <h1 className="text-2xl font-bold">KKLC Explore</h1>
        <p className="text-lg">
          <strong>Explore Kugenuma Kaigan Japan Shonan</strong>
        </p>
        <p className="text-sm">Coastal Vibes · Local Delights</p>
        <p className="text-xs">A Local Business Directory</p>
        <SearchBar mode="home" onSuggestionClick={handleSuggestionClick} />
      </div>
    </div>
  );
};

export default Banner;
