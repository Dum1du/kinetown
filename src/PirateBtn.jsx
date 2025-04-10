import React from "react";

function PirateBtn({ link }) {
  const gotoPirate = (link) => {
    window.open(link, "_blank", "noopener, noreferrer");
  };
  return (
    <div>
      <button
        onClick={() => gotoPirate(link)}
        className="mt-2 px-4 py-2 bg-[#3A7CA5] text-white rounded-lg hover:bg-[#3a7ca5ab]"
      >
        Go to Download Page
      </button>
    </div>
  );
}

export default PirateBtn;
