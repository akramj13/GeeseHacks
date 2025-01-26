import React, { useState } from "react";
import { useLevel } from "@/context/LevelContext";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";

const MyForm = () => {
  const [thoughts, setThoughts] = useState("");
  const [stocks, setStocks] = useState("");
  const [amount, setAmount] = useState<number | string>("");
  const { setLevel } = useLevel(); // Access the setLevel function from context
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("http://127.0.0.1:5000/api/gpt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "response": thoughts
      })
    });

    const data = await response.json();
    const experienceLevel = data.level;
    console.log(experienceLevel);

    setLevel(experienceLevel); // Save the level to the context
    router.push("/study-modules"); // Redirect to the next page
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 relative">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-96 bg-white p-6 rounded-lg shadow-md mb-8"
      >
        <label className="flex flex-col text-gray-700">
          How much do you know about investing?
          <textarea
            className="mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Enter your thoughts here..."
            value={thoughts}
            onChange={(e) => setThoughts(e.target.value)}
          />
        </label>
        <label className="flex flex-col text-gray-700">
          What stocks have you heard about?
          <textarea
            className="mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="List some stocks here..."
            value={stocks}
            onChange={(e) => setStocks(e.target.value)}
          />
        </label>
        <label className="flex flex-col text-gray-700">
          How much are you willing to invest if you were to start?
          <input
            type="number"
            className="mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Enter an amount in $"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        <button type="submit" className="px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600">
          Start Studying
        </button>
      </form>
    </div>
  );
};

export default MyForm;