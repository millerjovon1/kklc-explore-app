import Link from "next/link";

export default function VendorGrid() {
  const categories = [
    { title: "Restaurants", link: "/restaurants", img: "/public/images/restaurants.jpg" },
    { title: "Shops", link: "/shops", img: "/public/images/shops.jpg" },
    { title: "Health & Beauty", link: "/health-beauty", img: "/public/images/health-beauty.jpg" },
    { title: "Clinics", link: "/clinics", img: "/public/images/clinics.jpg" },
    { title: "Other", link: "/other", img: "/public/images/other.jpg" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-8">
      {categories.map((category) => (
        <Link href={category.link} key={category.title}>
          <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl">
            <img src={category.img} alt={category.title} className="w-full h-40 object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h3 className="text-white text-xl font-bold">{category.title}</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
