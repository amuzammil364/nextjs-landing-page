import Image from "next/image";
import styles from "./aboutSection.module.css";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section className={styles.about_section}>
      <div className={styles.container}>
        <div className={styles.about_section_content}>
          <div className={styles.about_section_icon}>
            <Image
              width={36}
              height={36}
              src={"/images/diamond.png"}
              alt="About Section Icon Img"
            />
          </div>
          <h2 className={styles.about_section_title}>
             Aenean vulputate quis est et pulvinar.{" "}
          </h2>
          <p className={styles.about_section_tagline}>
            Maecenas dapibus turpis id purus mollis aliquam. Sed facilisis nec
            ipsum nec rutrum.Maecenas dapibus turpis id purus mollis aliquam.
            Sed facilisis nec ipsum nec rutrum.Maecenas dapibus turpis id purus
            mollis aliquam. Sed facilisis nec ipsum nec
          </p>
          <Link href={"/"} className={styles.about_section_button}>
            About us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
