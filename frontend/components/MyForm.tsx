import React from 'react'
import Button from "@/components/ui/Button";

const MyForm = () => {
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
            <Button
              className="px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
              onClick={() => alert('Start button clicked!')}
            >
              Start Studying
            </Button>
          </a>
        </div>
  )
}
export default MyForm;