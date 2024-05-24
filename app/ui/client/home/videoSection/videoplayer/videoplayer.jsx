"use client";
import React, { useRef, useState } from "react";
import styles from "./videoplayer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faStop } from "@fortawesome/free-solid-svg-icons";

const VideoPlayer = ({ videoUrl }) => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const videoPlayHandler = () => {
    if (playing) {
      videoRef.current.pause();
      // videoRef.current.currentTime = 0;
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  return (
    <div className={styles.videoplayer_container}>
      <video ref={videoRef}>
        <source src={videoUrl} type="video/mp4" />
      </video>
      <div className={styles.videoplayer_btn_container}>
        {playing ? (
          <button onClick={videoPlayHandler}>
            <FontAwesomeIcon icon={faStop}></FontAwesomeIcon>
          </button>
        ) : (
          <button onClick={videoPlayHandler}>
            <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon>
          </button>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;
