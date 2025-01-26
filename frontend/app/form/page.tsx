"use client"
import NavBar from "@/components/NavBar";
import Button from "@/components/ui/Button";

export default function Form() {
    return (
        <>
        <NavBar />
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 relative">
        <a href="/study-modules">
          <Button
            className="px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
            onClick={() => alert('Start button clicked!')}
          >
            Start Studying
          </Button>
        </a>
        </div>
        </>
    );
}