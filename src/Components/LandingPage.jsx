import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function LandingPage() {
  const [pcapFile, setPcapFile] = useState(null);

  const [data, setData] = useState([]);

  const nav = useNavigate();

  const handlePcapUpload = (event) => {
    const file = event.target.files[0];
    setPcapFile(file);
  };

  const handleAnalyzePcap = () => {
    const formdata = new FormData();
    formdata.append("file", pcapFile);

    axios.post('http://localhost:8000/scan', formdata, {
      headers: {
        "Content-Type": "multipart/form-data",
      }
    })
    .then(x => console.log(`Doneeeeee!!!`))
    .catch(err => console.log(err))

  };

  const handleLiveTrafficAnalysis = () => {
    // Implement logic to start live network traffic analysis using your NIDS library
    console.log("Starting live traffic analysis");
    nav("/results");
  };

  return (
    <div className="flex flex-col justify-center items-center text-white min-h-screen">
      <p className="text-4xl font-bold text-center mb-8">
        Network Intrusion Detection System
      </p>
      <p className="text-xl text-white text-center mb-12">
        Protect your network from malicious activity.
      </p>

      <label className="font-semibold">UPLOAD PCAP</label>
      <div className="flex flex-col md:flex-row md:space-x-4">
        <div className="flex flex-col mb-4 md:mb-0">
          <input
            type="file"
            id="pcap-file"
            className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handlePcapUpload}
          />
        </div>
        <button
          className="disabled:opacity-50 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 disabled:cursor-not-allowed"
          disabled={!pcapFile}
          onClick={handleAnalyzePcap}
        >
          Analyze PCAP
        </button>
      </div>

      <div className="mt-8 text-center">
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:offset-2 focus:ring-green-700"
          onClick={handleLiveTrafficAnalysis}
        >
          Start Live Traffic Analysis
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
