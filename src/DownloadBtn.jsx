import React from "react";
import axios from "axios";
import "./App.css";

function DownloadBtn({ type, language, link, subtitleName }) {
  const handleDownload = async (link) => {
    console.log("Download Link:", link); // Debugging log
    console.log("Selected Language:", language); // Debugging log
    try {
      const response = await axios.post(
        "http://localhost:5002/download-translate",
        {
          downloadLink: link,
          targetLanguage: language,
          subtitleName: subtitleName,
        },
        { responseType: "blob" }
      );

      // Create a download link for the translated file
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const a = document.createElement("a");
      a.href = url;
      a.download = `${subtitleName}_${language}.srt`;
      a.click();
      a.remove();
    } catch (err) {
      console.error("Download Error:", err);
    }
  };

  return (
    <div>
      <button
        key={type}
        onClick={() => handleDownload(link)}
        className="mt-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
      >
        {type === "openSub"
          ? `Download (${language})`
          : `Download ${type} (${language})`}
      </button>
    </div>
  );
}

export default DownloadBtn;
