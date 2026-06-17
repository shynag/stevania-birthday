import { useState, useEffect } from "react";
import Image from "next/image";

// Daftar semua gambar yang ingin di-preload
const imagesToPreload = [
  "/logo_vidio.png",
  "/playlist.png",
  "/thumbnail.png",
  "/person/foto1.jpg",
  "/person/foto2.jpg",
  "/person/foto3.jpg",
  "/person/foto4.jpg",
  "/person/foto5.jpg",
  "/person/foto6.jpg",
];

interface PreloaderProps {
  onImagesLoaded: () => void;
}

const Preloader = ({ onImagesLoaded }: PreloaderProps) => {
  const [loadedCount, setLoadedCount] = useState(0);

  useEffect(() => {
    if (loadedCount === imagesToPreload.length) {
      onImagesLoaded();
    }
  }, [loadedCount, onImagesLoaded]);

  const handleImageLoad = () => {
    setLoadedCount((prevCount) => prevCount + 1);
  };

  return (
    <div style={{ display: 'none' }}>
      {imagesToPreload.map((src, index) => (
        <Image 
          key={index} 
          src={src} 
          alt="preload" 
          width={100} 
          height={100} 
          priority 
          onLoad={handleImageLoad}
        />
      ))}
    </div>
  );
};

export default Preloader;
