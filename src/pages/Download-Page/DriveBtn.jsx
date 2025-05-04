import React, { useState } from "react";
import { SpiningLoadingSmall } from "../../SpiningLoading";

function DriveBtn({ fileId, subtitleName }) {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    // const backendUrl = "http://localhost:5002";
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    console.log("fileID", fileId);
    try {
      setDownloading(true);
      const response = await fetch(
        `${backendUrl}/subtitle-db?fileId=${fileId}`
      );
      if (!response.ok) throw new Error("Download failed");

      // Create a blob from the response and trigger download
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${subtitleName}_si.srt`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove();
    } catch (err) {
      console.error("Download error:", err);
      alert("Failed to download subtitle");
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div>
      <button
        onClick={handleDownload}
        disabled={downloading}
        className="mt-2 px-4 py-2 bg-[#3A7CA5] text-white rounded-lg hover:bg-[#3a7ca5ab] disabled:bg-[#3a7ca569] disabled:py-2.5 disabled:px-13"
      >
        {downloading ? <SpiningLoadingSmall /> : "Download Subtitle"}
      </button>
    </div>
  );
}

export default DriveBtn;
