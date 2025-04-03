import React from "react";

function PirateBtn({ link }) {
  const gotoPirate = (link) => {
    window.open(link, "_blank", "noopener, noreferrer");
  };
  return (
    <div>
      <button
        onClick={() => gotoPirate(link)}
        className="mt-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
      >
        Go to Download Page
      </button>
    </div>
  );
}

export default PirateBtn;
