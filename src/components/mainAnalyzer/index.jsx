import React, { useState } from 'react';
import ResultsDisplay from '../result';
import CodeEditor from '../codeEditor';
import { Sparkles } from 'lucide-react';
import './styles.css';

// Note: In a real app, you'd import a chart library
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// --- Main AnalyzerSection Component ---

const defaultCode = `def find_max(numbers):
  max_val = numbers[0]
  for num in numbers:
    if num > max_val:
      max_val = num
  return max_val
`;

/**
 * Generates sample data for the graph based on complexity string.
 * This is a simplified example.
 */
const generateGraphData = (timeComplexity, spaceComplexity) => {
  const data = [];
  const inputs = [10, 50, 100, 200, 500, 1000];

  for (const n of inputs) {
    // Time series
    let time = 0;
    if (timeComplexity && timeComplexity.includes("n^2")) {
      time = Math.pow(n, 2) / 1000; // Scale down for visibility
    } else if (timeComplexity && timeComplexity.includes("n log n")) {
      time = n * Math.log2(n);
    } else if (timeComplexity && timeComplexity.includes("n")) { // O(n)
      time = n;
    } else if (timeComplexity && timeComplexity.includes("log n")) {
      time = Math.log2(n) * 10; // Scale up for visibility
    } else if (timeComplexity && timeComplexity.includes("1")) { // O(1)
      time = 50; // Show a constant flat line
    } else {
      time = n; // Default to linear for unknown
    }

    // Space series (smaller scale than time for visibility)
    let space = 0;
    if (spaceComplexity && spaceComplexity.includes("n^2")) {
      space = Math.pow(n, 2) / 10000;
    } else if (spaceComplexity && spaceComplexity.includes("n log n")) {
      space = (n * Math.log2(n)) / 10;
    } else if (spaceComplexity && spaceComplexity.includes("n")) {
      space = n * 0.1;
    } else if (spaceComplexity && spaceComplexity.includes("log n")) {
      space = Math.log2(n);
    } else if (spaceComplexity && spaceComplexity.includes("1")) {
      space = 10;
    } else {
      space = Math.max(1, n * 0.05);
    }

    data.push({ n, time: Math.max(1, time), space: Math.max(0.1, space) });
  }
  return data;
};


const AnalyzerSection = () => {
  const [code, setCode] = useState(defaultCode);
  const [language, setLanguage] = useState('python');
  const [analysis, setAnalysis] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleAnalyze = async () => {
    setIsLoading(true);
    setAnalysis(null); // Clear previous results

    try {
      const response = await fetch("https://complexityai-backend.onrender.com/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          code: code,
          language: language,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        // Handle HTTP errors (like 500) or FastAPI validation errors
         setAnalysis({
            time: "Error",
            timeExplanation: data.detail || "An unknown error occurred.",
            space: "Error",
            spaceExplanation: data.detail || "An unknown error occurred.",
            graphData: []
         });
      } else if (data.time === "Error") {
        // Handle custom errors returned from our API logic
        setAnalysis({ ...data, graphData: [] });
        } else {
        // Success! Generate graph data for both time and space and set the state.
        const graphData = generateGraphData(data.time, data.space);
        setAnalysis({
          ...data,
          graphData: graphData
        });
      }

    } catch (error) {
      // Handle network errors (e.g., server is down)
      console.error("Analysis API error:", error);
      setAnalysis({
        time: "Error",
        timeExplanation: `Failed to connect to the analysis server. Please make sure it's running at http://127.0.0.1:8000. \nError: ${error.message}`,
        space: "Error",
        spaceExplanation: `Failed to connect to the analysis server. Please make sure it's running. \nError: ${error.message}`,
        graphData: []
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
     <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden text-gray-900">
      {/* Content */}
      <div className="relative  z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 lg:h-180 gap-8">
        
        {/* Section 1: Code Editor */}
        <div className="flex flex-col">
          <CodeEditor
            code={code}
            setCode={setCode}
            language={language}
            setLanguage={setLanguage}
          />

          <button 
            onClick={handleAnalyze}
            disabled={isLoading}
            className="inline-flex items-center justify-center mt-3 px-8 py-4 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-indigo-500 transform transition duration-300 ease-in-out">

              <Sparkles className='mr-3 h-6 w-6' />
              Analyze Complexity
          </button>
        </div>

        {/* Section 2: Results */}
        <div>
          <ResultsDisplay analysis={analysis} isLoading={isLoading} />
        </div>
      </div>
    </section>
  );
};

export default AnalyzerSection;

