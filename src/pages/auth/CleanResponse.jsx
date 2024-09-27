import React from "react";
import { Code } from "lucide-react";
// import { SomeIcon } from 'lucide-react'; // Replace SomeIcon with the actual icon you need

const CleanResponse = ({ content }) => {
  const parseContent = (text) => {
    const codeBlockRegex = /```(\w*)\n([\s\S]*?)```/g;
    const codeBlocks = [];
    let match;
    while ((match = codeBlockRegex.exec(text)) !== null) {
      codeBlocks.push({
        language: match[1] || "plaintext",
        code: match[2].trim(),
      });
    }

    const explanationRegex = /\*\*(.*?)\*\*\s*([\s\S]*?)(?=\n\*\*|$)/g;
    const explanations = [];
    while ((match = explanationRegex.exec(text)) !== null) {
      explanations.push({
        title: match[1].trim(),
        content: match[2]
          .trim()
          .split("\n")
          .map((line) => line.trim())
          .filter(Boolean),
      });
    }

    return { codeBlocks, explanations };
  };

  const { codeBlocks, explanations } = parseContent(content);

  return (
    <div className="overflow-hidden bg-white rounded-lg shadow-lg">
      {codeBlocks.map((block, index) => (
        <div key={index} className="mb-4">
          <div className="flex items-center px-4 py-2 bg-gray-100">
            <Code className="w-5 h-5 mr-2 text-gray-600" />
            <h2 className="text-lg font-semibold text-gray-800">
              {block.language}
            </h2>
          </div>
          <div className="p-4">
            <pre className="p-4 overflow-x-auto rounded bg-gray-50">
              <code className="text-sm">{block.code}</code>
            </pre>
          </div>
        </div>
      ))}
      {explanations.map((explanation, index) => (
        <div key={index} className="mb-4">
          <div className="px-4 py-2 bg-gray-100">
            <h3 className="font-semibold text-gray-800 text-md">
              {explanation.title}
            </h3>
          </div>
          <div className="p-4">
            <ul className="space-y-2 list-disc list-inside">
              {explanation.content.map((item, itemIndex) => (
                <li key={itemIndex} className="text-gray-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
      {!codeBlocks.length && !explanations.length && (
        <div className="p-4 text-gray-700">{content}</div>
      )}
    </div>
  );
};

export default CleanResponse;
