import React from 'react';
import { FileCode, ChevronDown } from 'lucide-react';

// --- CodeEditor Component ---
const CodeEditor = ({ code, setCode, language, setLanguage }) => {
  return (
    <div id="code-editor" className="bg-white rounded-lg shadow-xl overflow-hidden h-full flex flex-col border border-gray-200">
      {/* Editor Header */}
        <div className="flex items-center justify-between bg-gray-100 px-4 py-2 text-gray-700">
        <div className="flex items-center gap-2">
            <FileCode className="h-5 w-5 text-purple-600" />
          <span className="text-sm font-medium">Algorithm Input</span>
        </div>
        <div className="relative">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
              className="appearance-none bg-white border border-gray-300 text-gray-800 text-sm rounded-md pl-3 pr-8 py-1 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
          >
            <option value="python">Python</option>
            <option value="javascript">JavaScript</option>
            <option value="java">Java</option>
            <option value="cpp">C++</option>
          </select>
            <ChevronDown className="h-4 w-4 text-gray-600 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
      </div>
      
      {/* Code Input Area */}
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
          className="w-full flex-grow p-4 bg-gray-50 text-gray-800 font-mono text-sm resize-none focus:outline-none placeholder-gray-500 border-t border-gray-200"
        style={{ minHeight: '400px' }}
        placeholder="Paste your code here..."
        spellCheck="false"
      />
    </div>
  );
};

export default CodeEditor;
