import Image from "next/image";

// Daftar semua gambar yang ingin di-preload
const imagesToPreload = [
  "/logo_vidio.png",
  "/person/foto1.jpg",
  "/person/foto2.jpg",
  "/person/foto3.jpg",
  "/person/foto4.jpg",
  "/person/foto5.jpg",
  "/person/foto6.jpg",
];

const Preloader = () => {
  return (
    <div style={{ display: 'none' }}>
      {imagesToPreload.map((src, index) => (
        <Image key={index} src={src} alt="preload" width={100} height={100} priority />
      ))}
    </div>
  );
};

export default Preloader;
