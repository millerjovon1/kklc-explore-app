import { FaBars } from 'react-icons/fa'; // Mobile menu toggle
import SearchBar from './SearchBar'; // Import the SearchBar component

const Banner = () => {
  const handleSuggestionClick = (businessId: string) => {
    window.location.href = `./show.html?id=${businessId}`; // Redirect to business page
  };

  return (
    <div className="home-banner relative h-[400px] bg-cover bg-center" style={{ backgroundImage: "url('../../images/banner_img.jpg'), linear-gradient(to bottom right, rgba(42, 9, 34, 0.476), rgba(58, 54, 42, 0.787))" }}>
      <div className="home-title flex flex-col items-center justify-center text-white h-[100px] mb-8">
        <h1 className="text-2xl font-bold">KKLC Explore</h1>
        <p className="text-lg"><strong>Explore Kugenuma Kaigan Japan Shonan</strong></p>
        <p className="text-sm">Coastal Vibes ・ Local Delights</p>
        <p className="text-xs">A Local Business Directory</p>
        <SearchBar mode="home" onSuggestionClick={handleSuggestionClick} /> {/* Home page search bar */}
      </div>
    </div>
  );
};

export default Banner;
