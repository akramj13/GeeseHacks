import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Button from "@/components/ui/button";

const DescriptionPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 relative">
      {/* Navigation Bar (Remains unchanged from the original website) */}
      <div id="navbar-placeholder" className="absolute top-0 w-full z-10"></div>

      {/* Description Section */}
      <Card className="w-11/12 md:w-2/3 lg:w-1/2 p-6 text-center mt-16">
        <CardContent>
          <h2 className="text-2xl font-semibold mb-4">Welcome the investment course page</h2>
          <p className="text-gray-700 mb-6">
            Here are some moduels to teach you about the different types of investments
          </p>
          <Button
            className="px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
            onClick={() => alert('Start button clicked!')}
          >
            Start
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default DescriptionPage;