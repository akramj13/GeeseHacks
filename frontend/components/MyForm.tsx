import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";

const MyForm = () => {
  const [thoughts, setThoughts] = useState("");
  const [stocks, setStocks] = useState("");
  const [amount, setAmount] = useState("");
  const [level, setLevel] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("http://127.0.0.1:5000/api/gpt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ "response": thoughts }),
    });

    const data = await response.json();
    console.log("API response:", data);

    const experienceLevel = data.level;
    setLevel(experienceLevel);
    router.push("/study-modules"); // Redirect to the first module
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 relative">
          {/* Form Section */}
          <form className="flex flex-col gap-4 w-96 bg-white p-6 rounded-lg shadow-md mb-8">
            <label className="flex flex-col text-gray-700">
              How much do you know about investing? 
              <textarea 
                className="mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Enter your thoughts here..."
              />
            </label>
            <label className="flex flex-col text-gray-700">
              What stocks have you heard about? 
              <textarea 
                className="mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="List some stocks here..."
              />
            </label>
            <label className="flex flex-col text-gray-700">
              How much are you willing to invest if you were to start? 
              <input 
                type="number"
                className="mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Enter an amount in $"
              />
            </label>
          </form>
          
          {/* Start Studying Button */}
          <a href="/study-modules">
            <button
              className="px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
              onClick={(e) => handleSubmit(e)}
            >
              Start Studying
            </button>
          </a>
        </div>
  )
}
export default MyForm;