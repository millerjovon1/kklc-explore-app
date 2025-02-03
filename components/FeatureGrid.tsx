import { businessesData } from './member_data.js'; // Import businesses data

// Categories to display
const categories = [
  { name: "Restaurants", filter: "restaurants" },
  { name: "Local Shops", filter: "shops" },
  { name: "Health & Beauty", filter: "health & beauty" },
  { name: "Medical", filter: "clinics" },
  { name: "Entertainment & Leisure", filter: "other" },
  { name: "Family Friendly", filter: "other" },
];

// Function to get random businesses for a category
const getRandomBusinesses = (category: string, count = 4) => {
  const filtered = businessesData.filter(
    (business) => business.industry === category
  );
  return filtered.sort(() => 0.5 - Math.random()).slice(0, count);
};

const FeatureGrid = () => {
  return (
    <div className="main-container">
      {categories.map((category) => {
        const businesses = getRandomBusinesses(category.filter);
        return (
          <div key={category.name} className="feature-category">
            <h3 className="border-b-2 mb-4 text-xl font-bold">{category.name}</h3>
            <div className="featured-grid grid grid-cols-4 gap-4 mx-auto sm:grid-cols-2 md:grid-cols-1">
              {businesses.map((business) => (
                <a
                  key={business.id}
                  href={`./show.html?id=${business.id}`}
                  className="group relative flex flex-col items-center bg-[#264653] text-white rounded-lg overflow-hidden"
                >
                  <img
                    className="feat-card-img w-full h-[200px] object-cover transition-opacity duration-300 group-hover:opacity-80"
                    src={business.image}
                    alt={business.name}
                  />
                  <div className="overlay absolute top-0 left-0 w-full h-full bg-black bg-opacity-50">
                    <p className="overlay-font text-center absolute inset-0 flex items-center justify-center font-semibold">
                      {business.name}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FeatureGrid;
