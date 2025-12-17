import React, { useRef, useState, useEffect } from "react";

const HIDE_DELAY = 1750;

const styles = {
  wrapper: {
    position: "relative",
    borderRadius: "14px",
    overflow: "hidden",
    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
  },
  video: {
    width: "100%",
    display: "block",
    cursor: "pointer",
  },
  centerPlay: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "60px",
    background: "rgba(0,0,0,0.6)",
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    width: "90px",
    height: "90px",
    cursor: "pointer",
    zIndex: 2,
  },
  controls: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "12px",
    background: "linear-gradient(to top, rgba(0,0,0,0.75), transparent)",
    transition: "opacity 0.3s ease",
  },
  hidden: {
    opacity: 0,
    pointerEvents: "none",
  },
  controlBtn: {
    background: "none",
    border: "none",
    color: "#fff",
    fontSize: "18px",
    cursor: "pointer",
  },
  progress: {
    flex: 1,
    cursor: "pointer",
  },
};

const HeroVideo = () => {
  const videoRef = useRef(null);
  const hideTimer = useRef(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [muted, setMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showControls, setShowControls] = useState(true);

  useEffect(() => {
    const video = videoRef.current;

    const updateProgress = () => {
      setProgress((video.currentTime / video.duration) * 100 || 0);
    };

    video.addEventListener("timeupdate", updateProgress);
    return () => video.removeEventListener("timeupdate", updateProgress);
  }, []);

  const resetHideTimer = () => {
    clearTimeout(hideTimer.current);
    setShowControls(true);

    if (isPlaying) {
      hideTimer.current = setTimeout(() => {
        setShowControls(false);
      }, HIDE_DELAY);
    }
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
      resetHideTimer();
    } else {
      video.pause();
      setIsPlaying(false);
      setShowControls(true);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    video.muted = !video.muted;
    setMuted(video.muted);
    resetHideTimer();
  };

  const handleSeek = (e) => {
    const video = videoRef.current;
    video.currentTime = (e.target.value / 100) * video.duration;
    resetHideTimer();
  };

  return (
    <div
      style={styles.wrapper}
      onMouseMove={resetHideTimer}
      onTouchStart={resetHideTimer}
    >
      <video
        ref={videoRef}
        src={`${import.meta.env.BASE_URL}Hero.mp4`}
        autoPlay
        loop
        muted={muted}
        playsInline
        onClick={togglePlay}
        style={styles.video}
      />

      {!isPlaying && (
        <button onClick={togglePlay} style={styles.centerPlay}>
          ▶
        </button>
      )}

      <div
        style={{
          ...styles.controls,
          ...(showControls ? {} : styles.hidden),
        }}
      >
        <button onClick={togglePlay} style={styles.controlBtn}>
          {isPlaying ? "❚❚" : "▶"}
        </button>

        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={handleSeek}
          style={styles.progress}
        />

        <button onClick={toggleMute} style={styles.controlBtn}>
          {muted ? "🔇" : "🔊"}
        </button>
      </div>
    </div>
  );
};

export default HeroVideo;
