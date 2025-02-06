import Image from 'next/image';
import styles from '@/styles/components/PlusLandingPage.module.css';

interface AboutSectionProps {
  name: string;
  description?: string;  // Optional short description
  aboutText?: string;  // Longer text about the business
  aboutSectionImage?: string;  // Accept the optional image
}

const AboutSection: React.FC<AboutSectionProps> = ({ name, description, aboutText, aboutSectionImage }) => (
  <section className={`${styles.aboutSection} p-8 bg-gray-50 rounded-lg shadow-md`}>
    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
      {/* Text Section */}
      <div className="flex-1">
        <h3 className="text-3xl font-bold mb-4">
          About <span className="text-indigo-600">{name}</span>
        </h3>

        {description && <p className="text-gray-600 text-lg mb-3">{description}</p>}

        {aboutText && <p className="text-gray-700 text-lg leading-relaxed">{aboutText}</p>}
      </div>

      {/* Image Section */}
      {aboutSectionImage && (
        <div className="flex-1 relative w-full md:w-[400px] h-[300px] rounded-lg overflow-hidden shadow-md">
          <Image
            src={aboutSectionImage}
            alt={`${name} About Section`}
            layout="fill"
            objectFit="cover"
          />
        </div>
      )}
    </div>
  </section>
);

export default AboutSection;
