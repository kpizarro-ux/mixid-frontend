import React, { useState } from "react";
import axios from "axios";

export default function TrackFinder() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [tracks, setTracks] = useState([]);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    setTracks([]);

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL || "http://localhost:8000"}/identify`,
        { url }
      );
      setTracks(res.data);
    } catch (err) {
      setError("Failed to identify tracks. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">DJ Set Track Finder</h1>
      <input
        type="text"
        className="w-full p-3 rounded bg-gray-800 border border-gray-700 mb-4"
        placeholder="Enter YouTube or SoundCloud link..."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        disabled={!url || loading}
        className="w-full p-3 rounded bg-indigo-600 hover:bg-indigo-500"
      >
        {loading ? "Finding Tracks..." : "Find Tracks"}
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      <div className="mt-6 space-y-2">
        {tracks.map((track, i) => (
          <div key={i} className="flex justify-between p-3 bg-gray-800 rounded">
            <span className="text-sm text-gray-300">{track.time}</span>
            <span className="text-sm text-white">{track.track}</span>
          </div>
        ))}
      </div>
    </div>
  );
}