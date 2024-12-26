const MobileWarning = () => {
  return (
    <div className="fixed inset-0 bg-zinc-900 flex items-center justify-center px-4 z-[100]">
      <div className="text-center">
        <h2 className="text-[#16F1D1] font-['Antique_Olive_Std'] text-2xl mb-4">
          ⚠️ Desktop View Recommended
        </h2>
        <p className="text-zinc-300 font-['matter'] text-lg">
          Please open this website on a desktop device for the best experience.
        </p>
      </div>
    </div>
  );
};

export default MobileWarning; 