import React from "react";

const ComingSoon = () => {
  return (
    <section
      id="coming-soon"
      className="min-h-[70vh] py-20 px-6 bg-white flex items-center justify-center"
    >
      <div className="text-center max-w-2xl">
        <h2 className="text-4xl font-bold text-[#6c63ff] mb-4">Coming Soon!</h2>
        <p className="text-lg text-gray-700 mb-6">
          More exciting content and features are on the way.
          Stay tuned for updates and fresh projects!
        </p>

        <div className="text-6xl animate-bounce">🚧</div>

        <p className="mt-4 text-sm italic text-gray-500">
          This section is still sprouting — like all good things, it takes time 🌱
        </p>
      </div>
    </section>
  );
};

export default ComingSoon;
