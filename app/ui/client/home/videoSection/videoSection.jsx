import { Suspense } from "react";
import styles from "./videoSection.module.css";
import VideoPlayer from "./videoplayer/videoplayer";
const VideoSection = () => {
  return (
    <section className={styles.build_video_section}>
      <div className={styles.container}>
        <div className={styles.video_container}>
          <Suspense fallback={<p>Loading video...</p>}>
            <VideoPlayer videoUrl="https://noderavel.com/wp-content/uploads/2024/05/ch-video.mp4" />
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
