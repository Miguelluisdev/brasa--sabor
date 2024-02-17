import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-50 w-50 border-t-2 border-b-2 border-gray-900"><p className="text-white font-PermanentMarker text-5xl" > Carregando os produtos...</p></div>
    </div>
  );
};

export default Loading;
