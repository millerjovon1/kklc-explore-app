import React from "react";
import Image from "next/image";
import styles from "@/styles/components/PlusLandingPage.module.css";

interface AboutSectionProps {
  name: string;
  description?: string;
  aboutText?: string;
  aboutSectionImage?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  name,
  description,
  aboutText,
  aboutSectionImage,
}) => (
  <section className={`${styles.aboutSection} p-6 sm:p-8 bg-gray-50 rounded-lg shadow-md w-full`}>
    <div className="flex flex-col md:flex-row items-center gap-8">
      {/* Text Section */}
      <div className="flex-1">
        <h3 className="text-2xl sm:text-3xl font-bold mb-4">
          About <span className="text-indigo-600">{name}</span>
        </h3>
        {description && <p className="text-gray-600 text-base sm:text-lg mb-3">{description}</p>}
        {aboutText && (
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">{aboutText}</p>
        )}
      </div>

      {/* Image Section */}
      {aboutSectionImage && (
        <div className="flex-1 w-full md:w-[400px] h-auto md:h-[300px] rounded-lg overflow-hidden shadow-md">
          <Image
            src={aboutSectionImage}
            alt={`${name} About Section`}
            layout="responsive"
            width={400}
            height={300}
            objectFit="cover"
            className="rounded-md"
          />
        </div>
      )}
    </div>
  </section>
);

export default AboutSection;
