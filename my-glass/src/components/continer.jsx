import React from "react";

const Container = () => {
  return (
    <div className="relative">
      {/* Background with Radial Gradient */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>

      {/* Card Container */}
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-2">Card 1 Title</h3>
          <p className="text-gray-700">Card 1 content goes here. You can change the content as needed.</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-2">Card 2 Title</h3>
          <p className="text-gray-700">Card 2 content goes here. You can change the content as needed.</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-2">Card 3 Title</h3>
          <p className="text-gray-700">Card 3 content goes here. You can change the content as needed.</p>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-2">Card 4 Title</h3>
          <p className="text-gray-700">Card 4 content goes here. You can change the content as needed.</p>
        </div>

        {/* Card 5 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-2">Card 5 Title</h3>
          <p className="text-gray-700">Card 5 content goes here. You can change the content as needed.</p>
        </div>
      </div>
    </div>
  );
};

export default Container;
