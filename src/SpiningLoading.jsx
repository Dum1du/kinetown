import React from "react";

function SpiningLoadingNormal() {
  return (
    <div className="w-10 h-10 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
  );
}
function SpiningLoadingSmall() {
  return (
    <div className="w-5 h-5 border-2 border-gray-200 border-t-gray-600 rounded-full animate-spin"></div>
  );
}

export { SpiningLoadingNormal, SpiningLoadingSmall };
