const ThemedLoader = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#43A5E3] z-[100]">
      <div>
        <div className="flex gap-8">
          <div className="heart-loader" style={{ animationDelay: "0s" }}></div>
          <div
            className="heart-loader"
            style={{ animationDelay: "0.2s" }}
          ></div>
          <div
            className="heart-loader"
            style={{ animationDelay: "0.4s" }}
          ></div>
        </div>
      </div>
      <p className="text-white font-sans font-bold text-lg mt-12">
        Menyiapkan Kejutan...
      </p>
    </div>
  );
};

export default ThemedLoader;
