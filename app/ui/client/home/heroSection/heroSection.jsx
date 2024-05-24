import styles from "./heroSection.module.css";

const HeroSection = ({lang}) => {
  return (
    <section className={styles.hero_section}>
      <div className={styles.container}>
        <div className={styles.hero_section_content}>
          <h1 className={styles.hero_section_title}>
            {lang.hero.heading}
          </h1>
          <p className={styles.hero_section_tagline}>
            {lang.hero.paragraph}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
