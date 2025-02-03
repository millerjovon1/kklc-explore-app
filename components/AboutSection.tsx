const AboutSection = () => {
  return (
    <div className="main-container">
      <div className="about flex flex-col sm:flex-row sm:justify-evenly sm:items-center w-full">
        <div className="about-bio flex flex-col items-center justify-center max-w-[60%] w-full text-left mx-auto">
          <h1 className="text-3xl font-bold mb-4">About</h1>
          <section className="section animate mb-4">
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
              "Our goal is to help more people discover, explore, and fall in love with
              this incredible town."
              Built with love and passion, this platform provides easy access to
              everything Kugenuma Kaigan has to offer, creating unforgettable experiences for visitors and locals alike.
            </p>
          </section>
        </div>
        <section className="section animate">
          <div className="about-profile">
            <img id="about-img" src="./images/about_img.jpg" alt="about-img" className="w-[400px] filter grayscale-[50%]" />
          </div>
        </section>
      </div>
      <section className="section animate">
        <div className="kklc-vendor-map">
          <h3 className="font-bold">Kugenuma Kaigan Main Street</h3>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
