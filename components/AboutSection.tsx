"use client";

import React from "react";
import styles from "@/styles/components/AboutSection.module.css";
import Image from 'next/image'

const AboutSection: React.FC = () => {
  return (
    <>
      <div className={styles.about}>
        <div className={styles.aboutBio}>
          <h1 className="text-3xl font-bold mb-4">About</h1>
          <section className="section animate ">
            <p>
              鵠沼海岸エリアのお店やコミュニティーに気軽にアクセスできるウェブサイト
              「KUGENUMA KAIGAN LOCAL COMMUNITY」
              <br />
              鵠沼海岸をもっと盛り上げたい！2020年に鵠沼海岸に移住したミラーFamilyが
              ローカルコミュニティーの強みを生かしたWEB SITEを作りました！
              「大好きなこの街をもっと知ってもらいたい」
              この地に移住し、この地に惚れ込んだ私たちの愛が詰まったサイトです。
              このサイトを通して多くの人に 鵠沼海岸の魅了が伝わったら嬉しいです。
            </p>
          </section>
          <section className="section animate">
            <p>
              Welcome to Kugenuma Kaigan Local Community—a website connecting you with
              the vibrant shops, services, and people that make this beachside town
              special. Since 2020, the Miller Family has been dedicated to showcasing
              the beauty and charm of Kugenuma Kaigan.
              &quot; Our goal is to help more people discover, explore, and fall in love with
              this incredible town.&quot;
              Built with love and passion, this platform provides easy access to
              everything Kugenuma Kaigan has to offer, creating unforgettable experiences
              for visitors and locals alike.
            </p>
          </section>
        </div>
        <section className="section animate">
          <div className={styles.aboutProfile}>
          <Image
            src="/images/about_img.jpg"
            alt="about-img"
            width={400}    // Intrinsic width
            height={300}   // Intrinsic height
            sizes="(max-width: 768px) 300px, 400px"
            className={styles.aboutImg}
          />
          </div>
        </section>
      </div>
      <section className="section animate">
          <h3 className="font-bold m-2">Kugenuma Kaigan Main Street</h3>
      </section>
    </>
  );
};

export default AboutSection;
