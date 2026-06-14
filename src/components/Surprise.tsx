import { useState } from "react";
import Image from "next/image";

const Surprise = () => {
  // --- TEMPATKAN LINK FOTO ANDA DI SINI ---
  const photoUrls = [
    "/person/foto1.jpg", // Ganti dengan link foto Anda
    "/person/foto2.jpg", // Ganti dengan link foto Anda
    "/person/foto3.jpg", // Ganti dengan link foto Anda
    "/person/foto4.jpg", // Ganti dengan link foto Anda
    "/person/foto5.jpg", // Ganti dengan link foto Anda
    "/person/foto6.jpg", // Ganti dengan link foto Anda
  ];

  // --- TEMPATKAN KODE VOUCHER ANDA DI SINI ---
  const voucherCode = "KODE-VIDIO-DARI-SHOPEE";
  const youtubePlaylistUrl = "https://music.youtube.com/playlist?list=PL_your_playlist_id";

  const [showCode, setShowCode] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(voucherCode);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
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

  return (
    <div className="w-full max-w-5xl mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Panel 1: Pesan Utama */}
        <div className="lg:col-span-2 p-6 bg-[#B60F61] border-4 border-black rounded-2xl shadow-[8px_8px_0_#0F172A] transform -rotate-1">
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

        {/* Panel 2: Alasan Aku Sayang Kamu */}
        <div className="p-6 bg-[#FEEA34] border-4 border-black rounded-2xl shadow-[8px_8px_0_#0F172A] transform rotate-2">
          <section>
            <h2 className="text-2xl md:text-3xl font-black text-center text-gray-800 mb-6 [text-shadow:_2px_2px_0_white]">
              Beberapa Alasan Aku Sayang Kamu
            </h2>
            <div className="grid grid-cols-1 gap-4 font-sans">
              <div className="p-3 bg-white/80 rounded-lg shadow-inner">
                <p className="text-gray-800">
                  🌸 Kamu lucu dan imut — susah banget buat ga sayang sama kamu
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

        {/* Panel 3: Galeri Momen Nyleneh */}
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

        {/* Panel 4: Playlist */}
        <div className="lg:col-span-2 p-6 bg-[#F4511E] border-4 border-black rounded-2xl shadow-[8px_8px_0_#0F172A] transform rotate-1 text-center">
          <h2 className="text-2xl md:text-3xl font-black text-black mb-6 [text-shadow:_2px_2px_0_white]">
            Playlist Spesial Buat Kamu
          </h2>
          <div className="bg-black/20 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-white">KONSER SPESIAL</h3>
            <p className="text-white/80">Playlist Ulang Tahunmu</p>
            <a href={youtubePlaylistUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block bg-black text-white font-black text-xl py-3 px-8 rounded-lg shadow-lg hover:bg-gray-800 transition-colors">
              LIHAT DAFTAR LAGU
            </a>
          </div>
        </div>

        {/* Panel 5: Kupon Klaim */}
        <div className="lg:col-span-2 p-6 bg-[#7BC043] border-4 border-dashed border-black rounded-2xl shadow-[8px_8px_0_#0F172A] transform -rotate-1">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-black text-center text-black mb-2 [text-shadow:_2px_2px_0_white]">
              KUPON HADIAH SPESIAL
            </h2>
            <VidioLogo />
            <p className="text-lg sm:text-xl font-semibold text-gray-800 font-sans">
              Paket Langganan Vidio Platinum (30 Hari)
            </p>
            {!showCode ? (
              <div onClick={() => setShowCode(true)} className="mt-6 bg-black text-white font-black text-xl md:text-2xl py-3 rounded-lg shadow-lg hover:bg-gray-800 transition-colors cursor-pointer">
                KLAIM KODE VOUCHER
              </div>
            ) : (
              <div className="mt-6 text-center">
                <p className="text-sm text-black font-sans">Kode Vouchermu:</p>
                <div className="my-2 p-3 bg-white/80 border-2 border-dashed border-black rounded-lg flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
                  <p className="text-xl sm:text-2xl font-mono tracking-widest text-black break-all">{voucherCode}</p>
                  <button onClick={handleCopy} className="px-3 py-1 bg-black text-white text-sm font-sans rounded-md hover:bg-gray-700 transition-colors w-full sm:w-auto">
                    {isCopied ? "Tersalin!" : "Salin"}
                  </button>
                </div>
                <div className="mt-4 text-left text-sm bg-white/50 p-3 rounded-lg font-sans">
                  <p className="font-bold mb-1">Cara Redeem di iPhone:</p>
                  <ol className="list-decimal list-inside">
                    <li>Buka browser (Safari/Chrome).</li>
                    <li>Masuk ke akun di <strong>vidio.com</strong>.</li>
                    <li>Pilih menu <strong>"Akun Saya"</strong> &gt;{" "}<strong>"Langganan & Pembelian"</strong>.</li>
                    <li>Klik <strong>"Gunakan Kode Voucher"</strong>.</li>
                    <li>Masukkan kode di atas lalu klik "Terapkan".</li>
                  </ol>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Surprise;
