"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const StartPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 relative">
      {/* Navigation Bar (Remains unchanged from the original website) */}
      <div id="navbar-placeholder" className="absolute top-0 w-full z-10"></div>

      {/* Description Section */}
      <Card className="w-11/12 md:w-2/3 lg:w-1/2 p-6 text-center mt-16">
        <CardContent className="flex flex-col items-center justify-center">
          <img
            src="/sunlife_logo.svg"
            alt="sun-life"
            width={200}
            height={200}
            className="rounded-lg pb-5"
          />
          <h2 className="text-2xl font-semibold mb-4">Welcome to LearnETF</h2>
          <p className="text-gray-700 mb-6">
            Learn more about Exchange-Traded Funds (ETFs) and how they can help you achieve your financial goals.
          </p>
          <a href="/study-modules">
          <Button
            className="px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
            onClick={() => alert('Start button clicked!')}
          >
            Start
          </Button>
          </a>
        </CardContent>
      </Card>
    </div>
  );
};

export default StartPage;