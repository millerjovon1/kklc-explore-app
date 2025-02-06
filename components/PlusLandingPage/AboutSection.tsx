import Image from 'next/image';
import styles from '@/styles/components/PlusLandingPage.module.css';

interface AboutSectionProps {
  name: string;
  description: string;
  aboutSectionImage?: string;  // Accept the optional image
}

const AboutSection: React.FC<AboutSectionProps> = ({ name, description, aboutSectionImage }) => (
  <section className={styles.aboutSection}>
    <h3 className="text-2xl flex font-semibold mb-4">About </h3><span>{name}</span>
    {aboutSectionImage && (
      <div className="relative w-[400px] h-[300px] mb-4 rounded-lg overflow-hidden shadow-md">
        <Image
          src={aboutSectionImage}
          alt={`${name} About Section`}
          layout="fill"
          objectFit="cover"
        />
      </div>
    )}
    <p className="text-gray-700 leading-relaxed">{description}</p>
  </section>
);

export default AboutSection;
