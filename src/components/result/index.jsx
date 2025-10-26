import React, { useState } from 'react';
import { Timer, Database, BookOpen, Loader2, BarChart3 } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

// --- ResultsDisplay Component ---
const ResultsDisplay = ({ analysis, isLoading }) => {
  
  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex flex-col items-center justify-center h-full min-h-[400px]">
            <Loader2 className="h-12 w-12 animate-spin text-purple-600" />
            <p className="mt-4 text-lg text-gray-600">Analyzing your code...</p>
        </div>
      );
    }

    if (!analysis) {
      return (
        <div className="flex flex-col items-center justify-center h-full min-h-[400px]">
          <BarChart3 className="h-12 w-12 text-gray-500" />
            <p className="mt-4 text-lg text-gray-500">
            Click "Analyze Code" to see your results.
          </p>
        </div>
      );
    }

  const [mode, setMode] = useState('time'); // 'time' | 'space'

    return (
      <div className="space-y-6">
        {/* --- Time Complexity --- */}
        <div>
            <h3 className="flex items-center text-2xl font-semibold text-purple-600 mb-2">
            <Timer className="mr-3 h-6 w-6" />
            Time Complexity: {analysis.time}
          </h3>
            <div className="flex items-start bg-gray-100 p-4 rounded-lg">
              <BookOpen className="h-5 w-5 text-gray-600 mr-3 mt-1 flex-shrink-0" />
              <p className="text-gray-700">{analysis.timeExplanation}</p>
          </div>
        </div>

        {/* --- Space Complexity --- */}
        <div>
            <h3 className="flex items-center text-2xl font-semibold text-blue-600 mb-2">
            <Database className="mr-3 h-6 w-6" />
            Space Complexity: {analysis.space}
          </h3>
            <div className="flex items-start bg-gray-100 p-4 rounded-lg">
              <BookOpen className="h-5 w-5 text-gray-600 mr-3 mt-1 flex-shrink-0" />
              <p className="text-gray-700">{analysis.spaceExplanation}</p>
          </div>
        </div>
        
        {/* --- Graph --- */}
        <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-2xl font-semibold text-gray-800">
                {mode === 'time' ? `Time Complexity: ${analysis.time}` : `Space Complexity: ${analysis.space}`}
              </h3>
              {/* Toggle buttons */}
              <div className="inline-flex rounded-md shadow-sm" role="tablist" aria-label="Chart toggle">
                <button
                  type="button"
                  onClick={() => setMode('time')}
                  className={`px-3 py-1 text-sm font-medium ${mode === 'time' ? 'bg-purple-600 text-white' : 'bg-white text-gray-700 border border-gray-200'}`}>
                  Time
                </button>
                <button
                  type="button"
                  onClick={() => setMode('space')}
                  className={`px-3 py-1 text-sm font-medium -ml-px ${mode === 'space' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border border-gray-200'}`}>
                  Space
                </button>
              </div>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg h-64 w-full text-gray-700">
            {/* Corrected Chart Implementation */}
            <ResponsiveContainer width="100%" height="100%">
              <LineChart 
                data={analysis.graphData}
                margin={{ top: 5, right: 15, left: -30, bottom: 5 }} // Adjust margins for labels
              >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                {/* Hide axis lines and tick labels for a cleaner visualization */}
                <XAxis dataKey="n" axisLine={true} tick={false} />
                <YAxis axisLine={true} tick={false} />
                <Tooltip 
                  contentStyle={{ 
                      backgroundColor: '#ffffff',
                      border: '1px solid #e5e7eb',
                    borderRadius: '0.5rem' 
                  }} 
                    itemStyle={{ color: '#374151' }}
                    labelStyle={{ color: '#111827', fontWeight: 'bold' }}
                />
                {/* Legend showing which line is Time vs Space */}
                <Legend verticalAlign="top" align="right" />
                { mode === 'time' && (
                  <Line 
                    type="monotone" 
                    dataKey="time" 
                    name="Time"
                    stroke="#7c3aed"
                    strokeWidth={2} 
                    dot={false} 
                    activeDot={{ r: 6, fill: '#7c3aed' }} 
                  />
                )}
                { mode === 'space' && (
                  <Line
                    type="monotone"
                    dataKey="space"
                    name="Space"
                    stroke="#2563eb"
                    strokeWidth={2}
                    dot={false}
                    activeDot={{ r: 6, fill: '#2563eb' }}
                  />
                )}
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    );
  };

  return (
      <div className="bg-white rounded-lg shadow-xl p-6 h-full border border-gray-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Analysis Results
      </h2>
      {renderContent()}
    </div>
  );
};

export default ResultsDisplay;
