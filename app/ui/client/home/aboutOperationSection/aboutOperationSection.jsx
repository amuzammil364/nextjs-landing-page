import Image from "next/image";
import styles from "./aboutOperationSection.module.css";
import Link from "next/link";

const AboutOperationSection = () => {
  return (
    <section className={styles.about_operation_section}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.about_operation_img}>
            <img src="/images/about-operation.png" />
          </div>
          <div className={styles.about_operation_content}>
            <h3 className={styles.about_operation_title}>
              Usce arcu turpis, vehicula in elementum tincidunt, faucibus at
              ligula.
            </h3>
            <p className={styles.about_operation_tagline1}>
              Proin pharetra lectus non felis vulputate, nec commodo quam
              mattis. Donec fermentum diam eget sem placerat vestibulum. Donec
              consectetur ut leo quis feugiat.
            </p>
            <p className={styles.about_operation_tagline2}>
              Phasellus quis dignissim lectus. Maecenas dolor ex, pulvinar in
              vestibulum eu, condimentum sit amet lacus. Fusce ex augue,
              facilisis ut ligula vitae, fringilla dictum sem. Donec tempus
              blandit nulla vel auctor. Donec non vestibulum tellus, sit amet
              condimentum felis. Maecenas scelerisque elit a lectus consequat
              tincidunt.
            </p>
            <Link href={""} className={styles.about_operation_button}>
              Read about operations
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOperationSection;
