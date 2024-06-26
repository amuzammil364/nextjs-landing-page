import styles from "./gridSection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Suspense } from "react";

const GridSection = ({lang}) => {
  return (
    <section className={styles.grid_section}>
        <Suspense fallback={<p>Loading video...</p>}>
            <video autoPlay muted>
                <source src="https://noderavel.com/wp-content/uploads/2024/05/ch-video.mp4" type="video/mp4" />
            </video>
        </Suspense>

      <div className={styles.container}>
            <div className={styles.grid}>
               <div className={styles.grid_content_conatiner}>
                    <div className={styles.grid_content}>
                        <div className={styles.grid_content_head}>
                            <p className={styles.grid_content_icon}><FontAwesomeIcon icon={faPlus} ></FontAwesomeIcon></p>
                            <h4 className={styles.grid_content_heading}>{lang.grid.heading1}</h4>
                        </div>
                        <div className={styles.grid_content_desc}>
                            <p>
                                {lang.grid.paragraph}
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.grid_content_conatiner}>
                    <div className={styles.grid_content}>
                        <div className={styles.grid_content_head}>
                            <p className={styles.grid_content_icon}><FontAwesomeIcon icon={faPlus} ></FontAwesomeIcon></p>
                            <h4 className={styles.grid_content_heading}>{lang.grid.heading2}</h4>
                        </div>
                        <div className={styles.grid_content_desc}>
                            <p>
                                {lang.grid.paragraph}
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles.grid_content_conatiner}>
                    <div className={styles.grid_content}>
                        <div className={styles.grid_content_head}>
                            <p className={styles.grid_content_icon}><FontAwesomeIcon icon={faPlus} ></FontAwesomeIcon></p>
                            <h4 className={styles.grid_content_heading}>{lang.grid.heading1}</h4>
                        </div>
                        <div className={styles.grid_content_desc}>
                            <p>
                                {lang.grid.paragraph}
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles.grid_content_conatiner}>
                    <div className={styles.grid_content}>
                        <div className={styles.grid_content_head}>
                            <p className={styles.grid_content_icon}><FontAwesomeIcon icon={faPlus} ></FontAwesomeIcon></p>
                            <h4 className={styles.grid_content_heading}>{lang.grid.heading2}</h4>
                        </div>
                        <div className={styles.grid_content_desc}>
                            <p>
                                {lang.grid.paragraph}
                            </p>
                        </div>
                    </div>
                </div>


            </div>
      </div>

    </section>
  );
};

export default GridSection;
