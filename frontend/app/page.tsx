import NavBar from "@/components/NavBar";
import SimulatedPage from "@/components/SimulatedPage";
import Image from "next/image";
import StartPage from "@/components/StartPage";

export default function Home() {
  return (
    <div className="font-sans">
      {/* Header */}
      <NavBar />
      <SimulatedPage />
    </div>
  );
}
