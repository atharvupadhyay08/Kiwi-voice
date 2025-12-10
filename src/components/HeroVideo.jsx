import React, { useRef, useState } from "react";

const HeroVideo = () => {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  const togglePlay = () => {
    const video = videoRef.current;
    video.paused ? video.play() : video.pause();
  };

  const toggleMute = () => {
    const video = videoRef.current;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  return (
    <div style={{ position: "relative", maxWidth: "800px", margin: "auto" }}>
      <video
        ref={videoRef}
        src={`${import.meta.env.BASE_URL}Hero.mp4`}
        autoPlay
        loop
        muted={muted}
        playsInline
        onClick={togglePlay}
        style={{
          width: "100%",
          borderRadius: "14px",
          cursor: "pointer",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        }}
      ></video>

      {/* Mute Button */}
      <button
        onClick={toggleMute}
        style={{
          position: "absolute",
          bottom: "15px",
          right: "15px",
          padding: "10px 14px",
          borderRadius: "50%",
          background: "rgba(0,0,0,0.6)",
          color: "white",
          border: "none",
          cursor: "pointer",
          fontSize: "14px",
          backdropFilter: "blur(5px)",
        }}
      >
        {muted ? "🔇" : "🔊"}
      </button>
    </div>
  );
};

export default HeroVideo;
