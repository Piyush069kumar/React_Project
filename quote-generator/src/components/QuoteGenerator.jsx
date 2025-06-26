import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import { FaCopy } from "react-icons/fa";
import toast from 'react-hot-toast';
import tweet from '../assert/tweet.avif';

const QuoteGenerator = () => {
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const fetchRandomQuote = async () => {
    setLoading(true);
    try {
      const res = await fetch(`https://api.quotable.io/random`);
      const data = await res.json();
      setQuote(data);
    } catch (e) {
      alert("Network error");
      console.log(e.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  const copy = () => {
    if (quote) {
      navigator.clipboard.writeText(`"${quote.content}" — ${quote.author}`);
      setCopied(true);
      toast.success("Copied");
      setTimeout(() => setCopied(false), 500);
    }
  };

  const tweetQuote = () => {
    if (quote) {
      const tweetText = `"${quote.content}" — ${quote.author}`;
      const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
      window.open(tweetUrl, "_blank");
    }
  };

  return (
    <div className="w-full flex flex-col items-center px-4 py-6  ">
      {loading ? (
        <Spinner />
      ) : (
        <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-xl relative  w-[90%] max-w-md drop-shadow-[0_0_10px_white]">
          {/* Quote Content */}
          <div className="mb-6">
            <div className="text-lg font-semibold text-gray-800 pr-10">
              {quote.content}
            </div>
            <div className="mt-3 text-right text-sm text-gray-500">
              — {quote.author}
            </div>
          </div>

          {/* Copy Button - Top Right */}
          <button
            onClick={copy}
            className="absolute top-4 right-4 text-gray-600 hover:text-black flex items-center text-sm"
          >
            <FaCopy className="mr-1" />
            {copied ? "Copied" : ""}
          </button>

          {/* Action Buttons */}
                    
            <div className="mt-6 flex justify-center gap-4 flex-wrap">
            {/* Generate Button */}
            <button
                type="button"
                onClick={fetchRandomQuote}
                className="flex items-center text-indigo-900 gap-2 px-4 py-2  text-gray-700 text-sm font-semibold rounded-full shadow-md hover:bg-emerald-600 transition duration-300 group"
            >
                Generate Quote
                <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:rotate-90"
                viewBox="0 0 16 19"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                    className="fill-gray-800 group-hover:fill-gray-800"
                ></path>
                </svg>
            </button>

            {/* Tweet Button */}
            <button
                onClick={tweetQuote}
                className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-full shadow-md hover:bg-blue-600 transition duration-300"
            >
                <img src={tweet} alt="Tweet" className="w-4 h-4" />
                Tweet
            </button>
            </div>

        </div>
      )}
    </div>
  );
};

export default QuoteGenerator;
