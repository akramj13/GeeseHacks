import Module from "@/components/Module";
import NavBar from "@/components/NavBar";
import StartPage from "@/components/StartPage";

export default function LearnETF() {
    return (
      <div className="font-sans">
        <NavBar />
        {/* Header */}
        <StartPage />
        <Module 
            title="What is an ETF?" 
            description="An ETF is a type of investment fund and exchange-traded product, with shares that trade like a stock on an exchange."
        />
      </div>
    );
  }