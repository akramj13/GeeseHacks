"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface ModuleProps {
  title: string;
  description: string;
  nextModuleSlug?: string | null;
}

const Module = ({ title, description, nextModuleSlug }: ModuleProps) => {
  const [ticker, setTicker] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [pctChangeStd, setPctChangeStd] = useState(0);
  const [chartData, setChartData] = useState(null);
  const router = useRouter();

  const getStockData = async () => {
    console.log("here is info:", ticker, startDate, endDate);
    
    const stockParameters = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }

    if (!ticker && !startDate && !endDate) {
      await fetch("http://127.0.0.1:5000/api/stock?ticker=SLF.TO&start=2020-01-01&end=2024-12-31", stockParameters)
      .then(result => result.json())
      .then(data => {
        console.log(data);
        console.log(data.chart);
        setChartData(data.chart);
        setPctChangeStd(data.pct_change_std);
      });
    } else {
      await fetch(`http://127.0.0.1:5000/api/stock?ticker=${ticker}&start=${startDate}&end=${endDate}`, stockParameters)
      .then(result => result.json())
      .then(data => {
        console.log(data);
        console.log(data.chart);
        setChartData(data.chart);
        setPctChangeStd(data.pct_change_std);
      });
    }
  }

  useEffect(() => {
    getStockData();
  }, []); // useEffect re-renders everytime you click a button with new ticker and dates, maybe not

  return (
    <section className="flex flex-col md:flex-row items-center bg-gray-100 py-8 px-4">
      {/* Module Text */}
      <div className="flex-1 text-center md:text-left rounded-lg shadow-md bg-white p-6">
        <h1 className="text-2xl font-bold mb-2">{title}</h1>
        <p className="text-gray-600 mb-4">{description}</p>
        {nextModuleSlug && (
          <button
            className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600"
            onClick={() => router.push(`/study-modules/${nextModuleSlug}`)}
          >
            Next
          </button>
        )}
      </div>

      {/* Interactive Module */}
      <div className="flex-1 p-5">
        <div className="rounded-lg shadow-md bg-white p-6 flex items-center justify-center">
          <p className="text-gray-700 font-medium">Interactive Module Section</p>
        </div>
      </div>
    </section>
  );
};

export default Module;
