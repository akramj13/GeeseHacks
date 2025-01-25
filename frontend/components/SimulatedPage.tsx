import React from 'react'

const SimulatedPage: React.FC = () => {
  return (
    <>
    {/* Hero Section */}
    <section className="flex flex-col md:flex-row items-center bg-gray-100 py-8 px-4">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-2xl font-bold mb-2">It matters who you trust. Partner right.</h1>
          <p className="text-gray-600 mb-4">
            Protect what you love and grow your money with personalized advice.
          </p>
          <button className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600">
            Find an advisor
          </button>
        </div>
        <div className="flex-1">
          <img
            src="/woman-on-phone.jpg"
            alt="Woman on phone"
            className="rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* Secondary Section */}
      <section className="flex flex-col md:flex-row items-center py-8 px-4">
        <div className="flex-1">
          <img
            src="/man-on-phone.jpg"
            alt="Man on phone"
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-xl font-bold mb-2">Register for my Sun Life online</h2>
          <p className="text-gray-600 mb-4">
            If you already have a workplace or personal plan with Sun Life, you
            can register online for my Sun Life.
          </p>
          <button className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600">
            Register now
          </button>
        </div>
      </section>
    </>
  )
}

export default SimulatedPage

