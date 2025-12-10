import { useRef, useState } from "react";

export default function HeroVideo() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;

    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <div className="relative w-full">
      <video
        ref={videoRef}
        src={`${import.meta.env.BASE_URL}Hero.mp4`}
        className="w-full rounded-lg"
        muted={isMuted}
        onClick={togglePlay}
      />

      {/* Mute / Unmute Button */}
      <button
        onClick={toggleMute}
        className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-2 rounded-lg"
      >
        {isMuted ? "Unmute" : "Mute"}
      </button>

      {/* Play / Pause Button */}
      <button
        onClick={togglePlay}
        className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-2 rounded-lg"
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
}
