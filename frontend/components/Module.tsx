"use client";
import React, { useState, useEffect } from "react";
import Plot from "react-plotly.js";
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

  const fetchStockData = async (tickerValue: string, start: string, end: string) => {
    console.log("here is info:", tickerValue, start, end);
    
    const stockParameters = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }

    const url = `http://127.0.0.1:5000/api/stock?ticker=${tickerValue}&start=${start}&end=${end}`;
    await fetch(url, stockParameters)
      .then(result => result.json())
      .then(data => {
        console.log(data);
        console.log(JSON.parse(data.chart));
        setChartData(JSON.parse(data.chart));
        setPctChangeStd(data.pct_change_std);
      })
      .catch((err) => console.error("Error fetching stock data:", err));
  }

  const getStockData = (e: React.FormEvent) => {
    e.preventDefault();
    fetchStockData(ticker, startDate, endDate);
  }

  useEffect(() => {
    fetchStockData("SLF.TO", "2020-01-01", "2024-12-31");
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

      <div className="flex-1 p-5">
        <div className="rounded-lg shadow-md bg-white p-6">
          <form onSubmit={e => getStockData(e)} className="space-y-4">
            <div>
              <label htmlFor="ticker" className="block text-sm font-medium text-gray-700">
                Ticker Symbol
              </label>
              <input
                type="text"
                id="ticker"
                value={ticker}
                onChange={(e) => setTicker(e.target.value)}
                placeholder="Enter ticker (e.g., SLF.TO)"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
              />
            </div>
            <div>
              <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
                Start Date
              </label>
              <input
                type="date"
                id="startDate"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
              />
            </div>
            <div>
              <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
                End Date
              </label>
              <input
                type="date"
                id="endDate"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Interactive Module */}
      <div className="flex-1 p-5">
        <div className="rounded-lg shadow-md bg-white p-6 flex items-center justify-center">
          {/* <p className="text-gray-700 font-medium">Interactive Module Section</p> */}
          {chartData ? (
            <Plot 
              data={chartData.data}
              layout={chartData.layout}
            />
          ) : (
            <p className="text-gray-700 font-medium">Loading chart...</p>
          )}
          
        </div>
      </div>
    </section>
  );
};

export default Module;
