import { useState } from "react";
import Image from "next/image";

const Surprise = () => {
  const [currentPanel, setCurrentPanel] = useState(0);

  // --- DATA KONTEN PANEL ---
  const photoUrls = [
    "/person/foto1.jpg",
    "/person/foto2.jpg",
    "/person/foto3.jpg",
    "/person/foto4.jpg",
    "/person/foto5.jpg",
    "/person/foto6.jpg",
  ];
  const voucherCode = "KODE-VIDIO-DARI-SHOPEE";
  const youtubePlaylistUrl =
    "https://music.youtube.com/playlist?list=PL_your_playlist_id";
  const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent("Makasih yaa kejutannyaa ❤️")}`; // GANTI DENGAN NOMOR WA ANDA

  const panels = [
    { type: "pesan" },
    { type: "alasan" },
    { type: "galeri" },
    { type: "playlist" },
    { type: "kupon" },
    { type: "closing" }, // Panel baru
  ];

  const nextPanel = () => {
    if (currentPanel < panels.length - 1) {
      setCurrentPanel(currentPanel + 1);
    }
  };

  const prevPanel = () => {
    if (currentPanel > 0) {
      setCurrentPanel(currentPanel - 1);
    }
  };

  // --- RENDER KOMPONEN ---
  const [showCode, setShowCode] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [runawayPos, setRunawayPos] = useState({ top: "50%", left: "75%" });
  const [isRunawayActive, setIsRunawayActive] = useState(false);

  const handleRunawayClick = () => {
    if (!isRunawayActive) {
      setIsRunawayActive(true);
    }
    setRunawayPos({
      top: `${Math.random() * 80}%`,
      left: `${Math.random() * 80}%`,
    });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(voucherCode);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const VidioLogo = () => (
    <div className="flex justify-center my-4">
      <div className="bg-white rounded-xl p-3 inline-block shadow-md">
        <Image
          src="/logo_vidio.png"
          alt="Vidio Logo"
          width={100}
          height={20}
          className="object-contain"
        />
      </div>
    </div>
  );

  const renderPanelContent = () => {
    const panel = panels[currentPanel];
    switch (panel.type) {
      case "pesan":
        return (
          <div className="p-6 bg-[#B60F61] border-4 border-black rounded-2xl shadow-[8px_8px_0_#0F172A] transform -rotate-1">
            <section className="text-center">
              <h1 className="text-3xl sm:text-4xl font-black text-gray-300 drop-shadow-lg [text-shadow:_3px_3px_0_black]">
                Selamat Ulang Tahun, Stevania Eka Lupita Sari! 🎂
              </h1>
              <p className="text-left mt-4 text-base sm:text-lg text-gray-300 font-sans">
                Hari ini, 19 Juni, semesta resmi ngerayain hari lahirnya orang
                yang paling dramatis — eh, maksudnya paling spesial yang pernah
                ada. Selamat ulang tahun, sayangku! Semoga di umur yang baru ini
                hidupmu penuh petualangan seru, banyak hal baik yang dateng, dan
                semoga makin jarang ngambek ya 🙏😂 You deserve all the good
                things! 🌟
              </p>
            </section>
          </div>
        );
      case "alasan":
        return (
          <div className="p-6 bg-[#FEEA34] border-4 border-black rounded-2xl shadow-[8px_8px_0_#0F172A] transform rotate-2">
            <section>
              <h2 className="text-2xl md:text-3xl font-black text-center text-gray-800 mb-6 [text-shadow:_2px_2px_0_white]">
                Beberapa Alasan Aku Masih Sayang Kamu
              </h2>
              <div className="grid grid-cols-1 gap-4 font-sans">
                <div className="p-3 bg-white/80 rounded-lg shadow-inner">
                  <p className="text-gray-800">
                    🌸 Kamu lucu dan imut — susah banget buat ga sayang sama
                    kamu
                  </p>
                </div>
                <div className="p-3 bg-white/80 rounded-lg shadow-inner">
                  <p className="text-gray-800">
                    💪 Kamu pekerja keras dan tahan banting — ngeliat kamu
                    berjuang itu bikin aku kagum
                  </p>
                </div>
                <div className="p-3 bg-white/80 rounded-lg shadow-inner">
                  <p className="text-gray-800">
                    🙈 Kamu manja tapi gengsi banget ngakuin — ditanya "sayang
                    ga?" jawabnya "engga" tapi lima menit kemudian minta dicium.
                    Klasik.
                  </p>
                </div>
              </div>
            </section>
          </div>
        );
      case "galeri":
        return (
          <div className="p-6 bg-[#00AEEF] border-4 border-black rounded-2xl shadow-[8px_8px_0_#0F172A] transform -rotate-2">
            <section>
              <h2 className="text-2xl md:text-3xl font-black text-center text-gray-300 mb-6 [text-shadow:_2px_2px_0_black]">
                Stevania dan Momen Nylenehnya
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {photoUrls.map((url, index) => (
                  <div
                    key={index}
                    className="aspect-square bg-gray-200 rounded-lg overflow-hidden border-2 border-black"
                  >
                    <img
                      src={url}
                      alt={`Funny moment ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </section>
          </div>
        );
      case "playlist":
        return (
          <div className="p-6 bg-[#F4511E] border-4 border-black rounded-2xl shadow-[8px_8px_0_#0F172A] transform rotate-1 text-center">
            <h2 className="text-2xl md:text-3xl font-black text-black mb-6 [text-shadow:_2px_2px_0_white]">
              Playlist Spesial Buat Kamu
            </h2>
            <div className="bg-black/20 p-8 rounded-lg">
              <div className="w-full aspect-square max-w-[200px] mx-auto mb-4 rounded-md overflow-hidden">
                <Image src="https://via.placeholder.com/500x500.png?text=Cover+Playlist" alt="Playlist Cover" width={500} height={500} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold text-white">KONSER SPESIAL</h3>
              <p className="text-white/80">Playlist Ulang Tahunmu</p>
              <a
                href={youtubePlaylistUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block bg-black text-white font-black text-xl py-3 px-8 rounded-lg shadow-lg hover:bg-gray-800 transition-colors"
              >
                LIHAT PLAYLIST
              </a>
            </div>
          </div>
        );
      case "kupon":
        return (
          <div className="p-6 bg-[#7BC043] border-4 border-dashed border-black rounded-2xl shadow-[8px_8px_0_#0F172A] transform -rotate-1">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-black text-center text-black mb-2 [text-shadow:_2px_2px_0_white]">
                KUPON HADIAH SPESIAL
              </h2>
              <VidioLogo />
              <p className="text-lg sm:text-xl font-semibold text-gray-800 font-sans">
                Paket Langganan Vidio Platinum (30 Hari)
              </p>
              {!showCode ? (
                <div
                  onClick={() => setShowCode(true)}
                  className="mt-6 bg-black text-white font-black text-xl md:text-2xl py-3 rounded-lg shadow-lg hover:bg-gray-800 transition-colors cursor-pointer"
                >
                  KLAIM KODE VOUCHER
                </div>
              ) : (
                <div className="mt-6 text-center">
                  <p className="text-sm text-black font-sans">
                    Kode Vouchermu:
                  </p>
                  <div className="my-2 p-3 bg-white/80 border-2 border-dashed border-black rounded-lg flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
                    <p className="text-xl sm:text-2xl font-mono tracking-widest text-black break-all">
                      {voucherCode}
                    </p>
                    <button
                      onClick={handleCopy}
                      className="px-3 py-1 bg-black text-white text-sm font-sans rounded-md hover:bg-gray-700 transition-colors w-full sm:w-auto"
                    >
                      {isCopied ? "Tersalin!" : "Salin"}
                    </button>
                  </div>
                  <div className="mt-4 text-left text-sm bg-white/50 p-3 rounded-lg font-sans">
                    <p className="font-bold mb-1">Cara Redeem di iPhone:</p>
                    <ol className="list-decimal list-inside">
                      <li>Buka browser (Safari/Chrome).</li>
                      <li>
                        Masuk ke akun di <strong>vidio.com</strong>.
                      </li>
                      <li>
                        Pilih menu <strong>"Akun Saya"</strong> &gt;{" "}
                        <strong>"Langganan & Pembelian"</strong>.
                      </li>
                      <li>
                        Klik <strong>"Gunakan Kode Voucher"</strong>.
                      </li>
                      <li>Masukkan kode di atas lalu klik "Terapkan".</li>
                    </ol>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      case "closing":
        return (
          <div className="p-6 bg-gray-800 border-4 border-black rounded-2xl shadow-[8px_8px_0_#0F172A] transform rotate-1 relative h-80 flex flex-col justify-center">
            <section className="text-center">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-6 [text-shadow:_2px_2px_0_black]">
                Satu Permintaan Terakhir...
              </h2>
              <p className="text-gray-300 font-sans mb-8">
                Kalau kamu suka kejutannya, bilang makasih ke aku di WA dong?
              </p>
              <div className="flex justify-center gap-4">
                <div className="w-1/2 flex justify-end pr-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-green-500 text-white font-bold rounded-lg shadow-lg"
                  >
                    Iya
                  </a>
                </div>
                <div className="w-1/2 flex justify-start pl-2">
                  <button
                    onClick={handleRunawayClick}
                    style={
                      isRunawayActive
                        ? {
                            position: "absolute",
                            top: runawayPos.top,
                            left: runawayPos.left,
                            transition: "top 0.3s, left 0.3s",
                          }
                        : {}
                    }
                    className="px-6 py-3 bg-red-500 text-white font-bold rounded-lg shadow-lg"
                  >
                    Gak!
                  </button>
                </div>
              </div>
            </section>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-4 h-full flex flex-col justify-center">
      <div className="flex-grow flex items-center justify-center">
        {renderPanelContent()}
      </div>

      {/* Tombol Navigasi */}
      <div className="fixed bottom-4 right-4 z-20 flex gap-2">
        {currentPanel > 0 && (
          <button
            onClick={prevPanel}
            aria-label="Previous slide"
            className="w-14 h-14 bg-black/50 rounded-full flex items-center justify-center text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
        )}
        {currentPanel < panels.length - 1 && (
          <button
            onClick={nextPanel}
            aria-label="Next slide"
            className="w-14 h-14 bg-black/50 rounded-full flex items-center justify-center text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default Surprise;
