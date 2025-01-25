import React from "react";

interface ModuleProps {
  title: string;
  description: string;
}

const Module = ({ title, description }: ModuleProps) => {
  return (
    <section className="flex flex-col md:flex-row items-center bg-gray-100 py-8 px-4">
      {/* Module Text */}
      <div className="flex-1 text-center md:text-left rounded-lg shadow-md bg-white p-6">
        <h1 className="text-2xl font-bold mb-2">{title}</h1>
        <p className="text-gray-600 mb-4">{description}</p>
        <button className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600">
          Next
        </button>
      </div>

      {/* Interactive Module */}
      <div className="flex-1 p-5">
        <div className="rounded-lg shadow-md bg-white p-6 flex items-center justify-center">
          <p className="text-gray-700 font-medium">Hello World</p>
        </div>
      </div>
    </section>
  );
};

export default Module;
