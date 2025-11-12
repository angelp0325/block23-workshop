import { useState } from "react";
import { episodeList } from "./data.js";
export default function App() {
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  return (
    <div className="app-container">
      <h1 className="app-title">Dark Echoes</h1>

      <ul className="episode-list">
        {episodes.map((episode) => (
          <li
            key={episode.id}
            className="episode-item"
            onClick={() => setSelectedEpisode(episode)}
          >
            {episode.title}
          </li>
        ))}
      </ul>

      <div className="episode-details">
        {!selectedEpisode ? (
          <p className="message">Select an episode to view its details.</p>
        ) : (
          <div>
            <h2>
              Episode {selectedEpisode.id}: {selectedEpisode.title}
            </h2>
            <p>{selectedEpisode.description}</p>
          </div>
        )}
      </div>
    </div>
  );
}
