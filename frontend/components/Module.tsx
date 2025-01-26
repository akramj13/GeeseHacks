"use client";
import React, { useState, useEffect } from "react";
import Plot from "react-plotly.js";
import { useRouter } from "next/navigation";

const defaultTicker = "SPY";
const defaultStart = "2020-01-01";
const defaultEnd = "2024-12-31";

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
  const [candleData, setCandleData] = useState(null);
  const [histData, setHistData] = useState(null);
  const router = useRouter();

  const fetchStockData = async (tickerValue: string, start: string, end: string) => {
    const url = `http://127.0.0.1:5000/api/stock?ticker=${tickerValue}&start=${start}&end=${end}`;
    await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((result) => result.json())
      .then((data) => {
        setCandleData(JSON.parse(data.candle_chart));
        setHistData(JSON.parse(data.hist_chart));
        setPctChangeStd(data.pct_change_std);
      })
      .catch((err) => console.error("Error fetching stock data:", err));
  };

  const getStockData = (e: React.FormEvent) => {
    e.preventDefault();
    fetchStockData(ticker || defaultTicker, startDate || defaultStart, endDate || defaultEnd);
  };

  useEffect(() => {
    fetchStockData(defaultTicker, defaultStart, defaultEnd);
  }, []);

  return (
    <section className="flex flex-col md:flex-row bg-gray-100 py-8 px-4">
      {/* Module Text */}
      <div className="w-full md:w-1/3 text-center md:text-left rounded-lg shadow-md bg-white p-6">
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

      {/* Right Side: Form and Chart */}
      <div className="w-full md:w-2/3 flex flex-col space-y-5 px-2">
        <div className="rounded-lg shadow-md bg-white p-6">
          <form onSubmit={getStockData} className="space-y-4">
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

        <div className="rounded-lg shadow-md bg-white p-6 flex flex-col items-center justify-center">
          <h2 style={{fontSize: "24px"}}>SPY</h2>
          {(pctChangeStd >= 0.015) ? (
            <p style={{color: "rgb(231, 49, 76)", fontSize: "18px"}}>Risky</p>
          ) : (
            <p style={{color: "rgb(50, 160, 30)", fontSize: "18px"}}>Safe</p>
          )}
          {candleData ? (
            <Plot data={candleData.data} layout={candleData.layout} />
          ) : (
            <p className="text-gray-700 font-medium">Loading chart...</p>
          )}
          {histData ? (
            <div className="flex flex-col items-center">
              <p>Distribution of Percent Change</p>
              <Plot data={histData.data} layout={histData.layout} />
            </div>
          ) : (
            <p className="text-gray-700 font-medium">Loading chart...</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Module;