import Image from "next/image";
import styles from "./aboutOperationSection.module.css";
import Link from "next/link";

const AboutOperationSection = ({lang}) => {
  return (
    <section className={styles.about_operation_section}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.about_operation_img}>
            <img src="/images/about-operation.png" />
          </div>
          <div className={styles.about_operation_content}>
            <h3 className={styles.about_operation_title}>
              {lang.aboutoperation.heading}
            </h3>
            <p className={styles.about_operation_tagline1}>
              {lang.aboutoperation.subheading}
            </p>
            <p className={styles.about_operation_tagline2}>
              {lang.aboutoperation.paragraph}
            </p>
            <Link href={""} className={styles.about_operation_button}>
              {lang.aboutoperation.button}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOperationSection;
