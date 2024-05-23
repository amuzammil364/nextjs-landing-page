import styles from "./heroSection.module.css";

const HeroSection = () => {
  return (
    <section className={styles.hero_section}>
      <div className={styles.container}>
        <div className={styles.hero_section_content}>
          <h1 className={styles.hero_section_title}>
            Lorem ipsum dolor sit amet, consec
          </h1>
          <p className={styles.hero_section_tagline}>
            Aliquam eu malesuada turpis, eu interdum nibh. Etiam tristique erat
            in ligula consequat malesuada. Praesent posuere vestibulum neque ac
            posuere. 
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
