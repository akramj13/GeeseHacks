import NavBar from "@/components/NavBar";
import Module from "@/components/Module";

export default function ModulePage() {
    return (
      <div className="font-sans">
        <NavBar />
        {/* Header */}
        <Module 
            title="What is an ETF?" 
            description="An ETF is a type of investment fund and exchange-traded product, with shares that trade like a stock on an exchange."
        />
      </div>
    );
  }