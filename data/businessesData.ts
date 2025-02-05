export interface StoreAmenities {
  wifiAvailable?: boolean;
  reservationsAccepted?: boolean;
  parkingAvailable?: boolean;
  deliveryAvailable?: boolean;
  petFriendly?: boolean;
  paymentOptions?: string[];  // Credit Card, Cash, Mobile Payments, etc.
}

export interface MenuItem {
  imageUrl: string;   // URL of the banner image
  name: string;
  price: string;
  description?: string;  // Optional short description
}

export interface Promotion {
  title: string;
  imageUrl?: string;  // Using imageUrl instead of image
  description: string;
  link?: string;  // Optional link to promotion details
}

export interface ThemeOptions {
  primaryColor?: string;  // Hex or color name for buttons, links, etc.
  secondaryColor?: string;
  textColor?: string;
}

export interface CustomBanner {
  imageUrl: string;   // URL of the banner image
  title?: string;     // Optional custom banner title
  subtitle?: string;  // Optional custom banner subtitle
}

export interface CustomFooter {
  text: string;          // Footer text content
  contactEmail?: string; // Contact email in the footer
  sponsor?: string;      // Sponsor name (if any)
}

export interface GoogleMap {
  embedUrl: string;       // Embed link to the map
  placeName?: string;     // Optional place name to display alongside the map
}

export interface Business {
  id: number;
  name: string;
  image: string;               // Profile/store image
  customBanner?: CustomBanner; // Custom banner section data
  ownerImage: string;
  phone: string;
  address: string;
  email: string;
  hours: {
    day: string;
    time: string;
  }[];
  owner: string;
  description: string;
  website: string;
  membershipLevel: "standard" | "plus" | "premium";
  industry: string;
  subcategory: string;
  socials: {
    instagram?: string | null;
    youtube?: string | null;
    tiktok?: string | null;
    twitter?: string | null;
    line?: string | null;
  };
  tags?: string[];                  // Unique selling points or business highlights
  storeAmenities?: StoreAmenities;  // Amenities offered by the business
  menuItems?: MenuItem[];           // Featured menu items (for restaurants, shops, etc.)
  promotions?: Promotion[];         // Active promotions
  themeOptions?: ThemeOptions;      // Custom theme options
  customFooter?: CustomFooter;      // Footer customization options
  googleMap?: GoogleMap;            // Google Map embed options
}

export const businessesData: Business[] = [
  {
    id: 1,
    name: "Tacos Shop Para Mexico",
    image: "/images/temp_store_img.jpg",
    ownerImage: "/images/example_img2.jpg",
    phone: "0466-53-7001",
    address: "",
    email: "N/A",
    hours: [{ day: "Monday-Sunday", time: "11:30 - 14:00 18:00 - 22:00" }],
    owner: "John Salley",
    description: "A cozy spot offering freshly brewed coffee and delicious treats.",
    website: "http://www.greenheartplace.com",
    membershipLevel: "standard",
    industry: "restaurants",
    subcategory: "Mexican - Tacos",
    socials: {
      instagram: "https://www.instagram.com/greenheartplace",
    },
  },
    {
      id: 2,
      name: "Better Together Coffee",
      image: "/images/bettertogethercoffee_store_img.jpg",
      ownerImage: "/images/bettertogethercoffee_owner_img.jpg",
      phone: "0466-123-4567",
      address: "https://maps.app.goo.gl/TgH6qodvKKkSEfun8",
      email: "bettertogethercoffee23@gmail.com",
      hours: [{ day: "Wednesday-Sunday", time: "8:00am - 17:00pm" }],
      owner: "Momoka Yamazaki, Namika Isigure",
      description: `Melbourne-style coffee and gluten-free treats.`,
      website: "http://www.bettertogethercoffee.store",
      membershipLevel: "plus",
      industry: "restaurants",
      subcategory: "Coffee Shop",
      socials: {
        instagram: "https://www.instagram.com/bettertogether_coffee/?hl=en",
      },
      tags: ["Family-Owned", "Gluten-Free Options", "Pet-Friendly"],
      storeAmenities: {
        wifiAvailable: true,
        reservationsAccepted: false,
        parkingAvailable: true,
        deliveryAvailable: true,
        petFriendly: true,
        paymentOptions: ["Credit Card", "Mobile Payment"],
      },
      menuItems: [
        { name: "Latte", price: "¥500", description: "Rich, creamy latte" },
        { name: "Avocado Toast", price: "¥800", description: "Sourdough bread topped with avocado" },
        image:"/images/bettertogethermenu_img.jpg"
      ],
      googleMap: {
        embedUrl:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.3516154066124!2d139.46763411630155!3d35.32071718032112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60184762e4b4a527%3A0xd3b7322bbdbb0c9d!2sKugenuma%20Kaigan!5e0!3m2!1sen!2sjp!4v1693143901234!5m2!1sen!2sjp",
        placeName: "Better Together Coffee - Kugenuma Kaigan",
      },
      customBanner: {
        imageUrl: "/images/better_together_banner_img.jpg",
        title: "Welcome to Better Together Coffee",
        subtitle: "Your local spot for Melbourne-style coffee in Kugenuma Kaigan!",
      },
      promotions: [
        {
          title: "New T-Shirt",
          imageUrl:"images/bettertogether_promotions_img.jpg",
          description: "We now have t-shirts! They are Amazing",
          link: "http://www.bettertogethercoffee.store/store",
        }
      ]

    },



  {
    id: 3,
    name: "We Eat Wheat 鵠沼海岸",
    image: "/images/temp_store_img.jpg",
    ownerImage: "/images/example_img2.jpg",
    phone: "0466-90-3033",
    address: "N/A",
    email: "N/A",
    hours: [
      { day: "Monday-Friday", time: "11:00 - 21:00" },
      { day: "Saturday-Sunday", time: "9:00 - 22:00" },
    ],
    owner: "Taro Yamada",
    description: "Experience the finest sushi made with fresh ingredients.",
    website: "http://www.theartofsushi.com",
    membershipLevel: "premium",
    industry: "restaurants",
    subcategory: "Italian - Pasta",
    socials: {
      tiktok: "https://www.tiktok.com/@theartofsushi",
    },
  },
  {
    id: 4,
    name: "Asian Dining DANFE",
    image: "/images/danfe_store_img.jpg",
    ownerImage: "/images/example_img2.jpg",
    phone: "0466-37-3910",
    address: "https://maps.app.goo.gl/6ifF3P8Ne7ope4GWA",
    email: "N/A",
    hours: [{ day: "Wednesday-Monday", time: "11:00 - 15:00. 17:00 - 22:00" }],
    owner: "N/A",
    description: `Authentic Indian & Nepalese curry with customizable spice levels! Enjoy a variety of dishes, including daily specials that keep every visit exciting.`,
    website: " ",
    membershipLevel: "standard",
    industry: "restaurants",
    subcategory: "Curry",
    socials: {
      instagram: " ",
    },
  },
  {
    id: 5,
    name: "2525 Homemade",
    image: "/images/temp_store_img.jpg",
    ownerImage: "/images/example_img2.jpg",
    phone: "080-9772-0241",
    address: "N/A",
    email: "N/A",
    hours: [{ day: "Tuesday-Friday", time: "11:00 - 17:00" }],
    owner: "N/A",
    description: "A homemade restaurant offering fresh meals with local ingredients.",
    website: "http://www.grillandchill.com",
    membershipLevel: "standard",
    industry: "restaurants",
    subcategory: "N/A",
    socials: {
      instagram: "https://www.instagram.com/grillandchillbbq",
    },
  },
  {
    id: 6,
    name: "Severico",
    image: "/images/temp_store_img.jpg",
    ownerImage: "/images/example_img2.jpg",
    phone: "0466-66-8288",
    address: "N/A",
    email: "N/A",
    hours: [{ day: "Monday-Sunday", time: "11:00 - 22:00" }],
    owner: "N/A",
    description: "Authentic BBQ with a variety of grilled specialties.",
    website: "http://www.grillandchill.com",
    membershipLevel: "standard",
    industry: "restaurants",
    subcategory: "Mediterranean - Fusion",
    socials: {
      instagram: "https://www.instagram.com/grillandchillbbq",
    },
  },
  {
    id: 7,
    name: "Restaurant NORI et NOJI",
    image: "/images/temp_store_img.jpg",
    ownerImage: "/images/example_img2.jpg",
    phone: "050-5890-0419",
    address: "N/A",
    email: "N/A",
    hours: [{ day: "Tuesday - Sunday", time: "12:00 - 15:00, 17:30 - 22:00" }],
    owner: "N/A",
    description: "Experience a cozy, Japanese-inspired restaurant.",
    website: "http://www.grillandchill.com",
    membershipLevel: "standard",
    industry: "restaurants",
    subcategory: "Japanese",
    socials: {
      instagram: "https://www.instagram.com/grillandchillbbq",
    },
  },
  {
    id: 8,
    name: "Hilo Homemade Ice Cream",
    image: "/images/temp_store_img.jpg",
    ownerImage: "/images/example_img2.jpg",
    phone: "0466-20-6120",
    address: "N/A",
    email: "N/A",
    hours: [{ day: "Friday - Tuesday", time: "11:00 - 17:30" }],
    owner: "N/A",
    description: "Delicious homemade ice cream with fresh ingredients.",
    website: "http://www.grillandchill.com",
    membershipLevel: "standard",
    industry: "restaurants",
    subcategory: "Dessert - Ice Cream",
    socials: {
      instagram: "https://www.instagram.com/grillandchillbbq",
    },
  },
  {
    id: 9,
    name: "Reg-On Diner 鵠沼海浜公園店",
    image: "/images/temp_store_img.jpg",
    ownerImage: "/images/example_img2.jpg",
    phone: "0466-53-8850",
    address: "N/A",
    email: "N/A",
    hours: [{ day: "Monday - Sunday", time: "10:00 - 20:00" }],
    owner: "N/A",
    description: "A diner offering burgers and classic American-style meals.",
    website: "http://www.grillandchill.com",
    membershipLevel: "standard",
    industry: "restaurants",
    subcategory: "Diner - Burger",
    socials: {
      instagram: "https://www.instagram.com/grillandchillbbq",
    },
  },
  {
    id: 10,
    name: "OSTMEET",
    image: "/images/example_img.jpg",
    ownerImage: "/images/example_img2.jpg",
    phone: "0466-21-9457",
    address: "N/A",
    email: "N/A",
    hours: [{ day: "Wednesday - Sunday", time: "11:00 - 21:00" }],
    owner: "N/A",
    description: "A Japanese restaurant featuring a modern twist on traditional cuisine.",
    website: "http://www.grillandchill.com",
    membershipLevel: "standard",
    industry: "restaurants",
    subcategory: "Japanese",
    socials: {
      instagram: "https://www.instagram.com/grillandchillbbq",
    },
  },
  {
    id: 11,
    name: "KUGENUMA RICE",
    image: "/images/temp_store_img.jpg",
    ownerImage: "/images/example_img2.jpg",
    phone: "0466-51-7766",
    address:"N/A",
    email:"N/A",
    hours: [{ day: "Wednesday - Sunday", time: "7:00- 15:30" }],
    owner: "N/A",
    description: "Example Description....",
    website: "http://www.grillandchill.com",
    membershipLevel: "standard",
    industry: "shops",
    subcategory: "Japanese - Onigiri",
    socials: {
      instagram: "https://www.instagram.com/grillandchillbbq",

    },
  },
  {
    id:12,
    name: "greenheart",
    image: "/images/temp_store_img.jpg",
    ownerImage: "/images/example_img2.jpg",
    phone: " ",
    address:"N/A",
    email:"N/A",
    hours: [
      { day: "Monday-Tuesday", time: "11:00 - 21:00" },
      { day: "Friday - Saturday", time: "9:00 - 22:00" }],
    owner: "N/A",
    description: "Example Description....",
    website: "http://www.grillandchill.com",
    membershipLevel: "standard",
    industry: "shops",
    subcategory: "Garden - Flower",
    socials: {
      instagram: "https://www.instagram.com/grillandchillbbq",

    },
  },
  {
    id: 13,
    name: "BONHEUR",
    image: "/images/temp_store_img.jpg",
    ownerImage: "/images/example_img2.jpg",
    phone: "0466-31-0330",
    address:"N/A",
    email:"N/A",
    hours: [{ day: "Monday - Wednesday", time: "8:30 - 18:30" },
           { day: "Saturday - Sunday ", time: "8:30 - 18:30" }],
    owner: "N/A",
    description: "Example Description....",
    website: "http://www.grillandchill.com",
    membershipLevel: "standard",
    industry: "restaurants",
    subcategory: "Dessert - Ice Cream",
    socials: {
      instagram: "https://www.instagram.com/grillandchillbbq",
      youtube: null,
      tiktok: null,
      twitter: null,
    },
  },

  {
    id: 14,
    name: "MuffinLab.",
    image: "/images/temp_store_img.jpg",
    ownerImage: "/images/example_img2.jpg",
    phone: "0466-53-3007",
    address:"N/A",
    email:"N/A",
    hours: [{ day: "Tuesday-Sunday", time: "10:00-19:00" }],
    owner: "N/A",
    description: "Example Description",
    website: "http://www.trendythreads.com",
    membershipLevel: "plus",
    industry: "shops",
    subcategory: "Bakery",
    socials: {
      instagram: "https://www.instagram.com/trendythreads",
      youtube: null,
      tiktok: null,
      twitter: "https://twitter.com/trendythreads",
    },
  },
  {
    id: 15,
    name: "LINOA",
    image: "/images/linoa_store_img.jpg",
    ownerImage: "/images/linoa_owner_img.jpg",
    phone: "0466-98-5209",
    address:"https://maps.app.goo.gl/Xjp928zgBJiB74Tn9",
    email:"N/A",
    hours: [{ day: "Thursday-Saturday", time: "9:00-19:00" },
            { day: "Sun/Tues/Wed", time: "9:00-18:00" }
    ],
    owner: "Yuuya Matsuura",
    description: "We provide a refined space, advanced skills, and meticulous service.",
    website: "https://beauty.hotpepper.jp/slnH000486813/ ",
    membershipLevel: "premium",
    industry: "health & beauty",
    subcategory: "Hair & Beauty Salon",
    socials: {
      instagram: "https://www.instagram.com/linoa_shonan/",
      youtube: null,
      tiktok: null,
      twitter: null,
    },
  },
  {
    id: 16,
    name: "KOA",
    image: "/images/koa_store_img.jpg",
    ownerImage: "/images/koa_owner_img.jpg",
    phone: " 090-2661-9965",
    address:"https://maps.app.goo.gl/NxfshLgSH35Dab5w5",
    email:"N/A",
    hours: [{ day: "Monday-Sunday", time: "9:00～18:00" }],
    owner: "Aoi Aizawa",
    description: `A relaxation salon that leaves you feeling amazingly light. Care
                  for your body while listening to your inner voice. Just a 3-minute
                  walk from Kugenuma Kaigan Station!`,
    website: "https://www.koalomi.com/",
    membershipLevel: "standard",
    industry: "health & beauty",
    subcategory: "Lomi Lomi Massage & Conditioning",
    socials: {
      instagram: "https://www.instagram.com/koa_lomi",
      youtube: null,
      tiktok: null,
      twitter: null,
    },
  },
  {
    id: 17,
    name: "Eyelash & hair GLOW 鵠沼海岸",
    image: "/images/temp_store_img.jpg",
    ownerImage: "/images/example_img2.jpg",
    phone: "+81(090)9999-1111",
    address:"N/A",
    email:"N/A",
    hours: [{ day: "Tuesday-Saturday", time: "10:00-19:00" },
            { day: "Sunday", time: "10:00-17:00" }
                                                          ],
    owner: "N/A",
    description: "Example Description",
    website: "http://www.cozyhomedecor.com",
    membershipLevel: "plus",
    industry: "health & beauty",
    subcategory: " Cosmetics - beauty salon",
    socials: {
      instagram: "https://www.instagram.com/cozyhomedecor",
      youtube: null,
      tiktok: null,
      twitter: null,
    },
  },


  {
    id: 19,
    name: "KOYO Lash＆Brow Studio",
    image: "/images/koyo_store_img.jpg",
    ownerImage: "/images/koyo_owner_img.jpg",
    phone: "0466-66-9169",
    address:"https://maps.app.goo.gl/XLB7VyAqHNQoeFut6",
    email:"koyo030718@gmail.com",
    hours: [{ day: "Monday-Sunday", time: "9:00-19:00" }],
    owner: "Kaori Ishimota",
    description: `KOYO is a small neighborhood salon with one owner.
                  It offers a relaxing space and high-quality services incorporating the latest trends.`,
    website: "https://beauty.hotpepper.jp/kr/slnH000611116/",
    membershipLevel: "standard",
    industry: "health & beauty",
    subcategory: "Lash&Brow",
    socials: {
      instagram: "https://www.instagram.com/koyo_kugenuma/",
      youtube: null,
      tiktok: null,
      twitter: null,
    },
  },
  {
    id: 20,
    name: "KOS",
    image: "/images/temp_store_img.jpg",
    ownerImage: "/images/example_img2.jpg",
    phone: "070-1227-9047",
    address:"N/A",
    email:"N/A",
    hours: [{ day: "Monday-Saturday", time: "09:30-17:30" }],
    owner: "N/A",
    description: "Example Description",
    website: "http://www.kaiganfamilyclinic.com",
    membershipLevel: "standard",
    industry: "health & beauty",
    subcategory: "Cosmetics - hair salon",
    socials: {
      instagram: null,
      youtube: null,
      tiktok: null,
      twitter: null,
    },
  },
  {
    id: 21,
    name: "トータルボディケアサロン久遠 kuon",
    image: "/images/temp_store_img.jpg",
    ownerImage: "/images/example_img2.jpg",
    phone: "0466-52-4468",
    address:"N/A",
    email:"N/A",
    hours: [{ day: "Thursday-Tuesday", time: "10:00-20:00" }],
    owner: "N/A",
    description: "Providing quality healthcare services for your entire family.",
    website: "http://www.kaiganfamilyclinic.com",
    membershipLevel: "standard",
    industry: "health & beuty",
    subcategory: "Cosmetics - hair salon",
    socials: {
      instagram: null,
      youtube: null,
      tiktok: null,
      twitter: null,
    },
  },
  {
    id: 22,
    name: "Kaigan Family Clinic",
    image: "/images/temp_store_img.jpg",
    ownerImage: "/images/example_img2.jpg",
    phone: "+81(090)1122-3344",
    address:"N/A",
    email:"N/A",
    hours: [
      { day: "Monday-Friday", time: "09:00-17:00" },
      { day: "Saturday", time: "09:00-13:00" },
    ],
    owner: "Dr. Kenji Sato",
    description: "Providing quality healthcare services for your entire family.",
    website: "http://www.kaiganfamilyclinic.com",
    membershipLevel: "standard",
    industry: "clinics",
    subcategory: "Family Medicine",
    socials: {
      instagram: null,
      youtube: null,
      tiktok: null,
      twitter: null,
    },
  },
  {
    id: 23,
    name: "Smile Dental Care",
    image: "/images/temp_store_img.jpg",
    ownerImage: "/images/example_img2.jpg",
    phone: "+81(090)2233-4455",
    address:"N/A",
    email:"N/A",
    hours: [{ day: "Monday-Friday", time: "10:00-18:00" }],
    owner: "Dr. Ayumi Tanaka",
    description: "Brighten your smile with expert dental care.",
    website: "http://www.smiledentalcare.com",
    membershipLevel: "plus",
    industry: "clinics",
    subcategory: "Dentistry",
    socials: {
      instagram: "https://www.instagram.com/smiledentalcare",
      youtube: null,
      tiktok: null,
      twitter: null,
    },
  },
  {
    id: 24,
    name: "Wellness Chiropractic",
    image: "/images/temp_store_img.jpg",
    ownerImage: "/images/example_img2.jpg",
    phone: "+81(090)3344-5566",
    address:"N/A",
    email:"N/A",
    hours: [{ day: "Monday-Friday", time: "08:00-16:00" }],
    owner: "Dr. Hiroshi Yamamoto",
    description: "Rejuvenate your body with holistic chiropractic care.",
    website: "http://www.wellnesschiropractic.com",
    membershipLevel: "premium",
    industry: "clinics",
    subcategory: "Chiropractic",
    socials: {
      instagram: null,
      youtube: null,
      tiktok: "https://www.tiktok.com/@wellnesschiropractic",
      twitter: null,
    },
  },
  {
    id: 25,
    name: "Vision Plus Optometry",
    image: "/images/temp_store_img.jpg",
    ownerImage: "/images/example_img2.jpg",
    phone: "+81(090)4455-6677",
    address:"N/A",
    email:"N/A",
    hours: [{ day: "Monday-Friday", time: "09:00-17:00" }],
    owner: "Dr. Emily Kimura",
    description: "Clearer vision for a brighter tomorrow.",
    website:    "http://www.visionplus.com",
    membershipLevel: "standard",
    industry: "clinics",
    subcategory: "Optometry",
    socials: {
      instagram: null,
      youtube: null,
      tiktok: null,
      twitter: null,
    },
  },

  // Other
  {
    id: 26,
    name: "Kugenuma Community Center",
    image: "/images/temp_store_img.jpg",
    ownerImage: "/images/example_img2.jpg",
    phone: "+81(090)6677-8899",
    address:"N/A",
    email:"N/A",
    hours: [{ day: "Monday-Saturday", time: "09:00-21:00" }],
    owner: "Akiko Nakamura",
    description: "A hub for cultural and community activities.",
    website: "http://www.kugenumacommunity.com",
    membershipLevel: "standard",
    industry: "other",
    subcategory: "Community Center",
    socials: {
      instagram: "https://www.instagram.com/kugenumacommunity",
      youtube: null,
      tiktok: null,
      twitter: null,
    },
  },
  {
    id: 27,
    name: "City Public Library",
    image: "/images/temp_store_img.jpg",
    ownerImage: "/images/example_img2.jpg",
    phone: "+81(090)5566-7788",
    address:"N/A",
    email:"N/A",
    hours: [
      { day: "Monday-Friday", time: "09:00-19:00" },
      { day: "Saturday", time: "10:00-17:00" },
    ],
    owner: "Library Director: Kazuo Hoshino",
    description: "Explore a world of knowledge at our public library.",
    website: "http://www.citylibrary.com",
    membershipLevel: "plus",
    industry: "other",
    subcategory: "Library",
    socials: {
      instagram: null,
      youtube: null,
      tiktok: null,
      twitter: null,
    },
  },
  {
    id: 28,
    name: "Kugenuma Arts and Crafts Studio",
    image: "/images/temp_store_img.jpg",
    ownerImage: "/images/example_img2.jpg",
    phone: "+81(090)6677-8899",
    address:"N/A",
    email:"N/A",
    hours: [{ day: "Tuesday-Sunday", time: "10:00-18:00" }],
    owner: "Rina Takagi",
    description: "Unleash your creativity at our arts and crafts studio.",
    website: "http://www.kugenumaarts.com",
    membershipLevel: "premium",
    industry: "other",
    subcategory: "Arts & Crafts",
    socials: {
      instagram: "https://www.instagram.com/kugenumaarts",
      youtube: "https://www.youtube.com/kugenumaarts",
      tiktok: null,
      twitter: null,
    },
  },
  {
    id: 29,
    name: "Sports Zone Arena",
    image: "/images/temp_store_img.jpg",
    ownerImage: "/images/example_img2.jpg",
    phone: "+81(090)7788-8899",
    address:"N/A",
    email:"N/A",
    hours: [{ day: "Monday-Saturday", time: "09:00-20:00" }],
    owner: "Takumi Hoshino",
    description: "Your destination for fitness and fun sports activities.",
    website: "http://www.sportszonearena.com",
    membershipLevel: "plus",
    industry: "other",
    subcategory: "Sports Complex",
    socials: {
      instagram: "https://www.instagram.com/sportszonearena",
      youtube: null,
      tiktok: null,
      twitter: null,
    },
  },
{
  id: 30,
  name: "Tranquil Touch Spa",
  image: "/images/temp_store_img.jpg",
  ownerImage: "/images/example_img2.jpg",
  phone: "+81(090)2234-5678",
  address:"N/A",
  email:"N/A",
  hours: [
    { day: "Monday-Friday", time: "10:00-20:00" },
    { day: "Saturday-Sunday", time: "11:00-18:00" },
  ],
  owner: "Aiko Nakamura",
  description: "Relax and rejuvenate with our full range of spa treatments.",
  website: "http://www.tranquiltouchspa.com",
  membershipLevel: "plus",
  industry: "health & beauty",
  subcategory: "Spa",
  socials: {
    instagram: "https://www.instagram.com/tranquiltouchspa",
    youtube: null,
    tiktok: null,
    twitter: "https://twitter.com/tranquil_spa",
  },
},
{
  id: 31,
  name: "Harmony Chiropractic Center",
  image: "/images/temp_store_img.jpg",
  ownerImage: "/images/example_img2.jpg",
  phone: "+81(090)3344-5566",
  address:"N/A",
  email:"N/A",
  hours: [
    { day: "Monday-Friday", time: "09:00-18:00" },
    { day: "Saturday", time: "10:00-15:00" },
  ],
  owner: "Dr. Satoshi Tanaka",
  description: "Holistic chiropractic care to align your health and wellness.",
  website: "http://www.harmonychiropractic.com",
  membershipLevel: "premium",
  industry: "health & beauty",
  subcategory: "Chiropractic",
  socials: {
    instagram: null,
    youtube: null,
    tiktok: "https://www.tiktok.com/@harmonychiropractic",
    twitter: null,
  },
},
{
  id: 32,
  name: "Elegance Salon & Spa",
  image: "/images/temp_store_img.jpg",
  ownerImage: "/images/example_img2.jpg",
  phone: "+81(090)1122-3344",
  address:"N/A",
  email:"N/A",
  hours: [
    { day: "Tuesday-Sunday", time: "09:00-19:00" },
    { day: "Monday", time: "Closed" },
  ],
  owner: "Naomi Suzuki",
  description: "Transform your look with our expert salon and spa services.",
  website: "http://www.elegancesalonandspa.com",
  membershipLevel: "standard",
  industry: "health & beauty",
  subcategory: "Salon & Spa",
  socials: {
    instagram: "https://www.instagram.com/elegancesalonspa",
    youtube: null,
    tiktok: null,
    twitter: null,
  },
},
{
  id: 33,
  name: "Glow Wellness Studio",
  image: "/images/temp_store_img.jpg",
  ownerImage: "/images/example_img2.jpg",
  phone: "+81(090)4455-6677",
  address:"N/A",
  email:"N/A",
  hours: [
    { day: "Monday-Friday", time: "08:00-16:00" },
    { day: "Saturday-Sunday", time: "10:00-14:00" },
  ],
  owner: "Yumi Hoshino",
  description: "Feel radiant inside and out with our personalized wellness programs.",
  website: "http://www.glowwellnessstudio.com",
  membershipLevel: "plus",
  industry: "health & beauty",
  subcategory: "Wellness Studio",
  socials: {
    instagram: "https://www.instagram.com/glowwellnessstudio",
    youtube: "https://www.youtube.com/glowstudio",
    tiktok: null,
    twitter: null,
  },
},
{
  id: 34,
  name: "Radiance Beauty Bar",
  image: "/images/temp_store_img.jpg",
  ownerImage: "/images/example_img2.jpg",
  phone: "+81(090)5566-7788",
  address:"N/A",
  email:"N/A",
  hours: [
    { day: "Monday-Friday", time: "10:00-18:00" },
    { day: "Saturday", time: "10:00-15:00" },
  ],
  owner: "Mika Endo",
  description: "Enhancing your natural beauty with expert treatments.",
  website: "http://www.radiancebeautybar.com",
  membershipLevel: "premium",
  industry: "health & beauty",
  subcategory: "Beauty Bar",
  socials: {
    instagram: "https://www.instagram.com/radiancebeautybar",
    youtube: null,
    tiktok: null,
    twitter: null,
  },
},
{
  id: 35,
  name: "Hamasaki Village",
  image: "/images/hamasaki_store_img.jpg",
  ownerImage: "/images/hamasaki_owner_img.jpg",
  phone: "0466-47-8953",
  address:"https://maps.app.goo.gl/Ur5xrLpqC3yz4skc9",
  email:"N/A",
  hours: [
    { day: "Monday-Sunday", time: "11:00-22:00" },
  ],
  owner: "Nobuyoshi Hamasaki",
  description: `Fresh seafood delights! All-you-can-eat grilled shellfish,
                seafood bowls, and set meals available`,
  website: "https://kaisenhamayaki-hamasakimura.com/",
  membershipLevel: "premium",
  industry: "restaurants",
  subcategory: "Izakaya Seafood",
  socials: {
    instagram: "https://www.instagram.com/hamasaki.mura/",
    youtube: null,
    tiktok: null,
    twitter: null,
  },
},
{
  id: 36,
  name: "Bonny Port",
  image: "/images/bonnyport_store_img.jpg",
  ownerImage: "/images/bonnyport_owner_img.jpg",
  phone: "090-8441-9908",
  address:"https://maps.app.goo.gl/NBhEkdM4pfbhBGrV7",
  email:"bonnyport48@gmail.com",
  hours: [
    { day: "Thursday-Sunday", time: " " },
  ],
  owner: "Yuko",
  description: `Original casual jewelry inspired by nature, designed by
                the owner since 2002 in Minami-Aoyama.`,
  website: "https://bonnyport.theshop.jp/",
  membershipLevel: "premium",
  industry: "shops",
  subcategory: "Jewelry",
  socials: {
    instagram: "https://www.instagram.com/bonny_port/?hl=en",
    youtube: null,
    tiktok: null,
    twitter: null,
  },
},
{
  id: 37,
  name: "Tallo",
  image: "/images/tallo_store_img.jpg",
  ownerImage: "/images/tallo_owner_img.jpg",
  phone: "080-4345-6265",
  address:"https://maps.app.goo.gl/9aynpehKhc4dpTGU7",
  email:"tallo.flower@gmail.com",
  hours: [
    { day: "Thursday-Sunday", time: "11:00-22:00" },
  ],
  owner: "Tomomi Kitsukawa",
  description: `Make your home a sanctuary. Brighten your life with flowers,
                embrace kindness, and find peace daily. `,
  website: "https://www.talloflower.com",
  membershipLevel: "premium",
  industry: "shops",
  subcategory: "Flower Shop",
  socials: {
    instagram: "https://www.instagram.com/tallo_flower/?hl=en",
    youtube: null,
    tiktok: null,
    twitter: null,
  },
},
{
  id: 38,
  name: "Emi General Store",
  image: "/images/emigeneralstore_store_img.jpg",
  ownerImage: "/images/emigeneralstore_owner_img.jpg",
  phone: "080-3318-6400",
  address:"https://maps.app.goo.gl/8D5GRWU3oMKYHqyE7",
  email:"emigeneralstore@gmail.com",
  hours: [
    { day: "Thursday-Tuesday", time: "11:00-19:00" },
  ],
  owner: "Soushi",
  description:  `Vintage US fashion handpicked with care,
                 offering smiles from Shonan to the nation. All genres`,
  website: "https://emigeneralstore.com/",
  membershipLevel: "premium",
  industry: "shops",
  subcategory: "Vintage Clothing",
  socials: {
    instagram: "https://www.instagram.com/emigeneralstore/?hl=en",

  },
},
{
  id: 39,
  name: "FLOWHLIA",
  image: "/images/flowhlia_store_img.jpg",
  ownerImage: "/images/flowhlia_owner_img.jpg",
  phone: "0466-66-9403",
  address:"https://maps.app.goo.gl/9G7ehCwcjg42MSF9A",
  email:"N/A",
  hours: [
    { day: "Wednesday-Friday", time: "10:00-21:00" },
    { day: "Saturday-Sunday", time: "9:00-18:00" },
  ],
  owner: "Momoka Yamazaki Namika Isigure",
  description:  `Kugenuma's first gym & spa! Transform with
                 bodyweight training, meditation, and hand lymph massages`,
  website: "https://flowhlia.com/",
  membershipLevel: "premium",
  industry: "health & beauty",
  subcategory: "Fitness Gym & Beauty Salon",
  socials: {
    instagram: "https://www.instagram.com/flowhlia/",

  },
},
{
  id: 40,
  name: "nanayoga",
  image: "/images/nanayoga_store_img.jpg",
  ownerImage: "/images/nanayoga_owner_img.jpg",
  phone: " ",
  address:"N/A",
  email:"nanayoga.yo@gmail.com",
  hours: [
    { day: "by appointment", time: "" },],
  owner: "Nanako",
  description:  `Add yoga to your daily life! Beach yoga,
                 group, and private lessons for all, led by a mom of three.`,
  website: "",
  membershipLevel: "premium",
  industry: "health & beauty",
  subcategory: "Fitness Gym & Salon",
  socials: {
    instagram: "https://www.instagram.com/nana_yoga.yo/",

  },
},
{
  id: 41,
  name: "Hanzo Fisheries",
  image: "/images/hanzosuisan_store_img.jpg",
  ownerImage: "/images/hanzosuisan_owner_img.jpg",
  phone: "09026661258",
  address:"https://maps.app.goo.gl/iNs7VWGAEFXNGsVk7",
  email:"hanzosuisan@gmail.com",
  hours: [
    { day: "Mon/Tues/Thurs/Fri/Sat", time: "11:00-21:00" },],
  owner: "Manabu Hanzawa",
  description:  `Founded in 2020 on a 50-year fish shop site, we offer fresh, local,
                 and nationwide fish directly from Yokohama Market!`,
  website: "https://www.hanzosuisan.com/",
  membershipLevel: "premium",
  industry: "shops",
  subcategory: "Fish Market",
  socials: {
    instagram: "https://www.instagram.com/hanzo_fish_kugenuma/",

  },
},
{
  id: 42,
  name: "Dream Tree English",
  image: "/images/dreamtreeenglish_store_img.jpg",
  ownerImage: "/images/dreamtreeenglish_owner_img.jpg",
  phone: "080-9806-2471",
  address:"https://maps.app.goo.gl/FGErcYAPDJMAuQWG7",
  email:"dreamtreejapan@gmail.com",
  hours: [
    { day: "Monday - Friday ", time: "15:00-18:00" },],
  owner: "Neil Humphrey",
  description:  `English school taught by a native speaker from San Francisco,
                 offering classes for all levels and ages!`,
  website: "https://www.dreamtreeenglish.com/",
  membershipLevel: "premium",
  industry: "other",
  subcategory: "English Language School",
  socials: {
    instagram: "https://www.instagram.com/dreamtreeenglish/",
    youtube: null,
    tiktok: null,
    twitter: null,
  },
},
{
  id: 43,
  name: "COUNTER ATTRACTION",
  image: "/images/counter_attraction_store_img.jpg",
  ownerImage: "/images/counter_attraction_owner_img.jpg",
  phone: "0466-21-7167",
  address:"https://maps.app.goo.gl/FGErcYAPDJMAuQWG7",
  email:"info@counterattraction",
  hours: [
    { day: "Thursday-Friday", time: "11:00-19:00" },
    { day: "Saturday", time: "11:00-19:00" },
  ],
  owner: "Taiju Sasaki",
  description:  `We specialize in coastal bikes, BMX, and customizations,
                 offering repairs and sales near a skate park.`,
  website: "https://counterca.buyshop.jp/",
  membershipLevel: "premium",
  industry: "shops",
  subcategory: "Bicycle Shop",
  socials: {
    instagram: "https://www.instagram.com/counterattractionca/",
    youtube:"https://www.instagram.com/counterattractionca/",
    tiktok: null,
    twitter: "https://x.com/CAttraction?prefetchTimestamp=1737701686725&mx=2",
  },
},
{
  id: 44,
  name: "Iroha",
  image: "/images/iroha_store_img.jpg",
  ownerImage: "/images/iroha_owner_img.jpg",
  phone: " ",
  address:"https://maps.app.goo.gl/C1rrdoBrB3jzfvmW7",
  email:"iroha_info@irohapilates.com",
  hours: [
    { day: "Monday-Friday", time: "9:00-20:00" },
    { day: "Saturday-Sunday", time: "11:00-19:00" },
  ],
  owner: "Ai",
  description:  `We offer the Cafformer, combining the reformer and advanced Cadillac,
                 along with a chair and weight training machines to meet various needs.`,
  website: "https://iroha-pilates.jp/",
  membershipLevel: "premium",
  industry: "health & beauty",
  subcategory: "Pilates & Training Studio",
  socials: {
    instagram: "https://www.instagram.com/iroha___pilates/",
    youtube: null,
    tiktok: null,
    twitter: null,
  },
},
{
  id: 45,
  name: "SAVOIA",
  image: "/images/savoia_store_img.jpg",
  ownerImage: "/images/savoia_owner_img.jpg",
  phone: " ",
  address:"https://maps.app.goo.gl/wmH9HXtducxhtJaP7",
  email:"N/A",
  hours: [
    { day: "N/A", time: "" },
  ],
  owner: "Haluna",
  description:  `We make gluten-free and plant based baked goods.
                 We currently operate as a mobile bakery with products
                 in The C for Collectives and Comad Kugenuma Kaigan.`,

  website: "https://savoiabyhalunami.stores.jp/",
  membershipLevel: "premium",
  industry: "shops",
  subcategory: "Gluten Free & Vegan Bakery",
  socials: {
    instagram: "https://www.instagram.com/savoia__gf/",
    youtube: null,
    tiktok: null,
    twitter: null,
  },
},
{
  id: 46,
  name: "NEON",
  image: "/images/neon_store_img.jpg",
  ownerImage: "/images/linoa_owner_img.jpg",
  phone: "070-9223-484",
  address:"https://maps.app.goo.gl/Tp5mPTWAsWx2Bmf19",
  email:"N/A",
  hours: [
    { day: "Monday-Sunday", time: "9:00-18:00" },
  ],
  owner: "Yuuya Matsuura",
  description:  `We provide a refined space, advanced skills, and meticulous service.`,

  website: "https://beauty.hotpepper.jp/kr/slnH000723292/",
  membershipLevel: "premium",
  industry: "health & beauty",
  subcategory: "Eye Lash Salon",
  socials: {
    instagram: "https://www.instagram.com/linoa_shonan/",
    youtube: null,
    tiktok: null,
    twitter: null,
  },
},
{
  id: 47,
  name: "Barchetta",
  image: "/images/barchetta_store_img.jpg",
  ownerImage: "/images/barchetta_owner_img.jpg",
  phone: "0466371973",
  address:"https://maps.app.goo.gl/eTpSpKBhExSzsmED6",
  email:"N/A",
  hours: [
    { day: "Wednesday-Saturday", time: "12:00-14:30" },
    { day: "Wednesday-Sunday", time: "18:00-22:00" },
  ],
  owner: "Takashi Uchida Kumiko Uchida",
  description: "Enjoy delicious pasta and wine for a happy time!",

  website: " ",
  membershipLevel: "premium",
  industry: "restaurants",
  subcategory: "Italian",
  socials: {
    instagram: "https://www.instagram.com/barchetta_k",
    youtube: null,
    tiktok: null,
    twitter: null,
  },
},
{
  id: 48,
  name: "Hiromasa Ryobuchi",
  image: "/images/hiro_store_img.jpg",
  ownerImage: "/images/example_img2.jpg",
  phone: " ",
  address:"https://maps.app.goo.gl/sZAJQJ24UrBdJMZZ6",
  email:"ryobuchi@lets-toho.com",
  hours: [
    { day: "Thursday-Monday", time: "9:00-18:00" },
  ],
  owner: "Toho House ",
  description: `Let me assist you in finding your home in Shonan.
                Whether you're just starting your search or already looking,
                feel free to contact me!`,

  website: " ",
  membershipLevel: "premium",
  industry: "other",
  subcategory: "Real estate",
  socials: {
    instagram: "https://www.instagram.com/hiro_shonan_iesagashi",
    line: "https://line.me/R/ti/p/@485sozus",
    youtube: null,
    tiktok: null,
    twitter: null,
  },
},
{
  id: 49,
  name: "Ken Dental",
  image: "/images/ken_dentist_store_img.jpg",
  ownerImage: "/images/ken_dentist_owner_img.jpg",
  phone: "0466-37-4618",
  address:"https://maps.app.goo.gl/CQPKtLEg5qtRKt5y5",
  email:"N/A",
  hours: [
    { day: "Monday-Friday", time: "9:30-18:00" },
    { day: "Saturday-Sunday", time: "9:30-17:00" },
  ],
  owner: "Ken Nakamura",
  description: `1-minute walk from Kugenuma-Kaigan Station.
                We strive to be a dental clinic that can be your lifelong partner.`,

  website: "https://kenshika.com",
  membershipLevel: "premium",
  industry: "clinics",
  subcategory: "Dentist",
  socials: {
    instagram: "https://www.instagram.com/kenshika_kugenuma",

  },
},

];
  // Continue expanding for all remaining businesses...
